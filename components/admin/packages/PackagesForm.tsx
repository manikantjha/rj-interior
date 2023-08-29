import useFormLogic from "@/customHooks/useFormLogic";
import { packageSchema } from "@/schemas/packageSchema";
import { FormProvider } from "react-hook-form";
import { UseQueryResult } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import FormSectionWrapper from "../common/FormSectionWrapper";
import Toast from "../common/Toast";
import PackagesListForm from "./PackagesListForm";
import SubmitButton from "../common/form/SubmitButton";
import TextInput from "../common/form/TextInput";
import { addPackage, updatePackage } from "@/services/apiServices";

type TForm = yup.InferType<typeof packageSchema>;

interface IPackagesFormProps {
  packages: UseQueryResult<any, unknown>;
  caseOfAdd: boolean;
}

export default function PackagesForm(props: IPackagesFormProps) {
  const defaultValues = props.packages?.data ? props.packages?.data : {};

  const { onSubmit, isLoading, methods } = useFormLogic<TForm>({
    defaultValues,
    schema: packageSchema,
    mutationFn: props.caseOfAdd ? addPackage : updatePackage,
    entity: "package",
    entityPlural: "packages",
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = methods;

  return (
    <FormSectionWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSectionContainer>
            <FormSectionContainer className="mb-4">
              <div className="grid gap-6 mb-4 md:grid-cols-2">
                <div>
                  <TextInput
                    label="Package Title"
                    name="title"
                    register={register}
                    error={errors.title}
                    placeholder="Title"
                  />
                </div>
                <div>
                  <TextInput
                    label="Starting Price"
                    name="price"
                    register={register}
                    error={errors.price}
                    type="string"
                  />
                </div>
              </div>
              <PackagesListForm />
            </FormSectionContainer>

            <div className="w-full flex items-center space-x-4 mt-8">
              <SubmitButton loading={isLoading} />
            </div>
          </FormSectionContainer>
        </form>
      </FormProvider>
      <Toast />
    </FormSectionWrapper>
  );
}
