import { addUpdatePackage } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import FormSectionTitle from "../common/FormSectionTitle";
import FormSectionWrapper from "../common/FormSectionWrapper";
import PackagesListForm from "./PackagesListForm";

type PackagesForm = {
  packages: {
    title: string;
    price: number;
    list: string[];
  }[];
};

interface IPackages {
  packages: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    packages: yup.array().of(
      yup.object({
        title: yup.string().required("Title is required"),
        price: yup
          .number()
          .positive("Price must be greater than 0")
          .required("Price is required"),
        list: yup.array().of(yup.string().required("List item is required")),
      })
    ),
  })
  .required();

export default function PackagesForm(props: IPackages) {
  const objForm = useForm<PackagesForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      packages: props?.packages?.data?.packages
        ? props?.packages?.data?.packages[0]?.packages
        : [{ title: "", price: 0, list: [] }],
    },
  });

  const addUpdatePackagesMutation = useMutation(addUpdatePackage, {
    onSuccess: () => {},
  });

  const onSubmit = (data: PackagesForm) => {
    const id = props?.packages?.data?.packages
      ? props?.packages?.data?.packages[0]?._id
      : undefined;
    addUpdatePackagesMutation.mutate({ ...data, id: id });
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = objForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "packages",
  });

  return (
    <FormSectionWrapper>
      <FormSectionTitle title="Packages" />
      <FormProvider {...objForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSectionContainer>
            {fields.map((item, index) => (
              <FormSectionContainer key={item.id} className="mb-4">
                <div className="grid gap-6 mb-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Package {index + 1} Title
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Package title"
                      {...register(`packages.${index}.title`)}
                    />
                    {errors.packages && errors.packages[index]?.title && (
                      <p className="text-red-700 text-sm">
                        * {errors.packages[index]?.title?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Starting Price
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="0"
                      {...register(`packages.${index}.price`)}
                    />
                    {errors.packages && errors.packages[index]?.price && (
                      <p className="text-red-700 text-sm">
                        * {errors.packages[index]?.price?.message}
                      </p>
                    )}
                  </div>
                </div>
                <PackagesListForm parentIndex={index} />
              </FormSectionContainer>
            ))}
            <div className="w-full flex items-center space-x-4 mt-8">
              <button
                type="button"
                className="bg-gray-50 border border-primary hover:bg-white active:bg-gray-200 px-8 py-2 text-primary font-semibold rounded-full"
                onClick={() => append({ title: "", price: 0, list: [] })}
              >
                Add Package
              </button>
              <button
                type="submit"
                className="bg-primary hover:bg-orange-600 active:bg-orange-800 px-8 py-2 text-white font-semibold rounded-full"
              >
                Submit
              </button>
            </div>
          </FormSectionContainer>
        </form>
      </FormProvider>
    </FormSectionWrapper>
  );
}
