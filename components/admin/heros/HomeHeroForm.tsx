import { addUpdateHero } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import { ToastOptions, toast } from "react-toastify";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import ImageUploader from "../common/ImageUploader";
import SubmitButton from "../common/SubmitButton";
import Toast from "../common/Toast";

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
    imageURL: yup.string().required("Image is required!"),
    hasContactButton: yup.boolean(),
  })
  .required();

export default function HeroForm(props: IHeroFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HeroForm>({
    resolver: yupResolver(schema),
    defaultValues: props.hero.data ? { ...props.hero.data.hero } : {},
  });

  const notify = (text: string, options: ToastOptions) => toast(text, options);

  const addUpdateHeroMutation = useMutation(addUpdateHero, {
    onSuccess: () => {},
  });

  function onSubmit(data: HeroForm) {
    addUpdateHeroMutation.mutate(
      {
        ...data,
        pageId: "home",
        id: props?.hero?.data?.hero?._id || "",
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
              {errors.title && (
                <p className="text-red-700 mt-2 text-sm">
                  * {errors.title?.message}
                </p>
              )}
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
            <Controller
              control={control}
              name={`imageURL`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <ImageUploader
                  label="Hero Image"
                  onChange={onChange}
                  id={`home_hero_imageURL`}
                  imageURL={props?.hero?.data?.hero?.imageURL || ""}
                />
              )}
            />
            {errors.imageURL && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.imageURL?.message}
              </p>
            )}
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
            <SubmitButton isLoading={addUpdateHeroMutation.isLoading} />
          </div>
        </FormSectionContainer>
      </form>
      <Toast />
    </>
  );
}
