import useFormLogic from "@/customHooks/useFormLogic";
import { founderSchema } from "@/schemas/founderSchema";
import { addFounder, updateFounder } from "@/services/apiServices";
import { Controller } from "react-hook-form";
import { UseQueryResult } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import Toast from "../common/Toast";
import TextArea from "../common/form/TextArea";
import TextInput from "../common/form/TextInput";
import ImageUploaderNew from "../common/imageUploaderNew/ImageUploaderNew";
import SubmitButton from "../common/form/SubmitButton";

type TForm = yup.InferType<typeof founderSchema>;

interface ITeamMembersFormProps {
  founders?: UseQueryResult<any, unknown>;
  caseOfAdd: boolean;
}

export default function FoundersForm(props: ITeamMembersFormProps) {
  const defaultValues = props.founders?.data ? props.founders?.data : {};

  const { onSubmit, isLoading, methods } = useFormLogic<TForm>({
    defaultValues,
    schema: founderSchema,
    mutationFn: props.caseOfAdd ? addFounder : updateFounder,
    entity: "founder",
    entityPlural: "founders",
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    register,
  } = methods;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSectionContainer>
          <div className="grid gap-6 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <FormSectionContainer>
                <div className="w-full flex justify-end"></div>
                <div className="mb-4">
                  <Controller
                    control={control}
                    name={`image`}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <ImageUploaderNew
                        label="Founder Image"
                        onChange={onChange}
                        image={value}
                        folderName="founders"
                        fileName={getValues("name")}
                        error={errors.image}
                      />
                    )}
                  />
                </div>
                <div>
                  <TextInput
                    label="Founder Name"
                    name="name"
                    register={register}
                    error={errors.name}
                    placeholder="Founder Name"
                  />
                  <TextInput
                    label="Founder Designation"
                    name="designation"
                    register={register}
                    error={errors.designation}
                    placeholder="Founder Designation"
                  />
                  <TextArea
                    label="Founder Short Description"
                    name="description"
                    register={register}
                    error={errors.description}
                    placeholder="Founder Short Description"
                  />
                </div>
              </FormSectionContainer>
            </div>
          </div>

          <div className="w-full flex items-center space-x-4 mt-8">
            <SubmitButton loading={isLoading} />
          </div>
        </FormSectionContainer>
      </form>
      <Toast />
    </>
  );
}
