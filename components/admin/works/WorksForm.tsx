import { addUpdateWork } from "@/services/apiServices";
import { storage } from "@/services/firebaseServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { deleteObject, ref } from "firebase/storage";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import { ToastOptions, toast } from "react-toastify";
import * as yup from "yup";
import AddMoreButton from "../common/AddMoreButton";
import FormSectionContainer from "../common/FormSectionContainer";
import ImageUploader from "../common/ImageUploader";
import SubmitButton from "../common/SubmitButton";
import Toast from "../common/Toast";

type WorksForm = {
  works: {
    imageURL?: string;
    embedId?: string;
    isVideo?: boolean;
    name: string;
    description: string;
  }[];
};

interface IWorksFormProps {
  works?: UseQueryResult<any, unknown>;
}

const schema = yup.object({
  works: yup.array().of(
    yup.object().shape(
      {
        imageURL: yup.string().when("embedId", (embedId, stringSchema) => {
          console.log("embedId", embedId);
          if (!embedId || embedId.length === 0 || !embedId[0])
            return stringSchema.required(
              "Either provide an image or an embed id!"
            );
          return stringSchema;
        }),
        embedId: yup.string().when("imageURL", (imageURL, stringSchema) => {
          if (!imageURL || imageURL.length === 0 || !imageURL[0])
            return stringSchema.required(
              "Either provide an image or an embed id!"
            );
          return stringSchema;
        }),
        name: yup.string(),
        description: yup.string(),
        isVideo: yup.boolean(),
      },
      [["imageURL", "embedId"]]
    )
  ),
});

export default function WorksForm(props: IWorksFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<WorksForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      works: props.works?.data?.works
        ? props.works?.data?.works[0]?.works
        : [{ name: "", description: "", imageURL: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "works",
  });

  watch("works");

  const addUpdateWorkMutation = useMutation(addUpdateWork, {
    onSuccess: () => {},
  });

  function deleteFile(index: number) {
    if (
      !(
        props.works?.data?.works &&
        props.works?.data?.works[0]?.works[index]?.imageURL
      )
    ) {
      return;
    }
    const imageRef = ref(
      storage,
      (props.works?.data?.works &&
        props.works?.data?.works[0]?.works[index]?.imageURL) ||
        ""
    );

    deleteObject(imageRef)
      .then(() => {
        console.log("Deleted successfuly!");
        notify("Image removed", { type: "success" });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  const notify = (text: string, options: ToastOptions) => toast(text, options);

  function onSubmit(data: any) {
    const id = props.works?.data?.works ? props.works?.data?.works[0]?._id : "";
    addUpdateWorkMutation.mutate(
      {
        ...data,
        id: id,
      },
      {
        onSuccess: () => {
          notify("Submitted succesfully!", { type: "success" });
        },
        onError: () => {
          notify("Failed to submit!", { type: "error" });
        },
      }
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSectionContainer>
          <div className="grid gap-6 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fields.map((item, index) => (
              <div key={item.id}>
                <FormSectionContainer>
                  <div className="w-full flex justify-end">
                    <button
                      type="button"
                      className="bg-primary text-white border hover:bg-orange-800 active:bg-orange-800 p-1 font-semibold rounded-full flex"
                      onClick={() => {
                        deleteFile(index);
                        remove(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {getValues(`works.${index}.isVideo`) ? (
                    <div className="mb-4">
                      <p className="block mb-2 text-sm font-medium text-gray-900">
                        YouTube Embed ID
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="YouTube Embed ID"
                        {...register(`works.${index}.embedId`)}
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <Controller
                        control={control}
                        name={`works.${index}.imageURL`}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <ImageUploader
                            label="Work Image"
                            onChange={onChange}
                            index={index}
                            id={`works.${index}.imageURL`}
                            imageURL={
                              (props.works?.data?.works &&
                                props.works?.data?.works[0]?.works[index]
                                  ?.imageURL) ||
                              ""
                            }
                          />
                        )}
                      />
                      {errors.works && errors.works[index]?.imageURL && (
                        <p className="text-red-700 text-sm">
                          * {errors.works[index]?.imageURL?.message}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <Controller
                      control={control}
                      name={`works.${index}.isVideo`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <>
                          <input
                            id={`works.${index}.isVideo`}
                            type="checkbox"
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary focus:ring-2"
                            onChange={onChange}
                            checked={value}
                          />
                          <label
                            htmlFor={`works.${index}.isVideo`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Is Video
                          </label>
                        </>
                      )}
                    />
                  </div>
                  <div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900">
                        Work Name
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Work Name"
                        {...register(`works.${index}.name`)}
                      />
                    </div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900 mt-2">
                        Work Short Description
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Work Short Description"
                        {...register(`works.${index}.description`)}
                      />
                    </div>
                  </div>
                </FormSectionContainer>
              </div>
            ))}
          </div>

          <div className="w-full flex items-center space-x-4 mt-8">
            <AddMoreButton
              onClick={() =>
                append({
                  name: "",
                  description: "",
                  imageURL: "",
                  isVideo: false,
                })
              }
              text="Add Work"
            />
            <SubmitButton isLoading={addUpdateWorkMutation.isLoading} />
          </div>
        </FormSectionContainer>
      </form>
      <Toast />
    </>
  );
}
