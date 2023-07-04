import { addUpdateHero } from "@/services/apiServices";
import { storage } from "@/services/firebaseServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";

export type HeroForm = {
  pageId: string;
  title: string;
  description: string;
  imageURL: string;
  hasContactButton: boolean;
};

export interface IHeroFormProps {
  hero: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    title: yup.string().required("Title is required!"),
    description: yup.string(),
    hasContactButton: yup.boolean(),
  })
  .required();

export default function HeroForm(props: IHeroFormProps) {
  const [image, setImage] = useState<File>();
  const [downloadURL, setDownloadURL] = useState(
    props.hero?.data?.hero?.imageURL || ""
  );
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const addUpdateHeroMutation = useMutation(addUpdateHero, {
    onSuccess: () => {},
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroForm>({
    resolver: yupResolver(schema),
    defaultValues: props.hero.data ? { ...props.hero.data.hero } : {},
  });

  function onSubmit(data: HeroForm) {
    if (!downloadURL) return;
    addUpdateHeroMutation.mutate({
      ...data,
      imageURL: downloadURL,
      pageId: "home",
      id: props?.hero?.data?.hero?._id || "",
    });
  }

  function handleFileSelection(files: FileList | null) {
    if (!files) return;
    if (files[0].size < 10000000) {
      setImage(files[0]);
      handleFileUpload(files[0]);
    } else {
      console.log("File size too large!");
    }
  }

  function handleFileUpload(image: File) {
    if (image) {
      const name = image.name;
      const storageRef = ref(storage, `images/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log("Error: ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url);
          });
        }
      );
    } else {
      console.log("File not found!");
    }
  }

  function handleFileRemove() {
    setImage(undefined);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSectionContainer>
        <div className="grid gap-6 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="home_hero_title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Hero Title
            </label>
            <input
              id="home_hero_title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Hero Title"
              {...register(`title`)}
            />
          </div>
          <div>
            <label
              htmlFor="home_hero_short_description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Hero Short Description
            </label>
            <input
              id="home_hero_short_description"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Hero Short Description"
              {...register(`description`)}
            />
          </div>
        </div>
        <div className="mb-4">
          <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hero Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="home_hero_image"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden"
              >
                {downloadURL ? (
                  <div className="h-full w-full">
                    <img
                      src={downloadURL}
                      alt={downloadURL}
                      className="object-contain h-full w-auto mx-auto"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to Upload</span> or
                      Drag and Drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                <input
                  id="home_hero_image"
                  type="file"
                  className="hidden"
                  onChange={(files) => {
                    handleFileSelection(files.target.files);
                  }}
                />
              </label>
            </div>
          </>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2"
            {...register(`hasContactButton`)}
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Has Contact Button
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary hover:bg-orange-600 active:bg-orange-800 px-8 py-2 text-white font-semibold rounded-full mt-6"
          >
            Submit
          </button>
          {/* <button type="button" onClick={handleFileUpload}>
            {isUploading ? "Uploading" : "Upload"}
          </button> */}
        </div>
      </FormSectionContainer>
    </form>
  );
}
