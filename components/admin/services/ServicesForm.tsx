import { addUpdateService } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import FormSectionWrapper from "../common/FormSectionWrapper";
import ServicesListForm from "./ServicesListForm";

export type ServicesForm = {
  services: {
    title: string;
    list: string[];
  }[];
};

interface IServices {
  services: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    services: yup.array().of(
      yup.object({
        title: yup.string().required("Title is required"),
        list: yup.array().of(yup.string().required("List item is required")),
      })
    ),
  })
  .required();

export default function ServicesForm(props: IServices) {
  const objForm = useForm<ServicesForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      services: props?.services?.data?.services
        ? props?.services?.data?.services[0]?.services
        : [{ title: "", list: [] }],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = objForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const addUpdateServicesMutation = useMutation(addUpdateService, {
    onSuccess: () => {},
  });

  const onSubmit = (data: ServicesForm) => {
    const id = props?.services?.data?.services
      ? props?.services?.data?.services[0]?._id
      : undefined;
    addUpdateServicesMutation.mutate({ ...data, id: id });
  };

  return (
    <FormSectionWrapper>
      <FormProvider {...objForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSectionContainer>
            {fields.map((item, index) => (
              <FormSectionContainer key={item.id} className="mb-4">
                <div className="grid gap-4 mb-4">
                  <div>
                    <label
                      htmlFor={`title${index}`}
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Service {index + 1} Title
                    </label>
                    <input
                      id={`title${index}`}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Title"
                      {...register(`services.${index}.title`)}
                    />
                  </div>
                  {errors.services && errors.services[index]?.title && (
                    <p className="text-red-700 text-sm">
                      * {errors.services[index]?.title?.message}
                    </p>
                  )}
                  <ServicesListForm parentIndex={index} />
                </div>
              </FormSectionContainer>
            ))}
            <div className="w-full flex items-center space-x-4 mt-8">
              <button
                type="button"
                className="bg-gray-50 border border-primary hover:bg-white active:bg-gray-200 px-8 py-2 text-primary font-semibold rounded-full"
                onClick={() => append({ title: "", list: [""] })}
              >
                Add Service
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
