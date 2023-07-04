import { addUpdateTeamMember } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import ImageUploader from "../common/ImageUploader";

type TeamMembersForm = {
  teamMembers: {
    imageURL: string;
    name: number;
    description: string[];
  }[];
};

interface ITeamMembersFormProps {
  teamMembers?: UseQueryResult<any, unknown>;
}

const schema = yup.object({
  teamMembers: yup.array().of(
    yup.object({
      imageURL: yup.string(),
      name: yup.string().required("Name is required"),
      description: yup.string().required("Description is required"),
    })
  ),
});

export default function TeamMembersForm(props: ITeamMembersFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      teamMembers: props.teamMembers?.data
        ? props.teamMembers?.data?.teamMembers[0]?.teamMembers
        : [{ name: "", description: "", imageURL: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  });

  const addUpdateTeamMemberMutation = useMutation(addUpdateTeamMember, {
    onSuccess: () => {},
  });

  function onSubmit(data: any) {
    const id = props.teamMembers?.data?.teamMembers[0]?._id || "";
    addUpdateTeamMemberMutation.mutate({
      ...data,
      id: id,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSectionContainer>
          <div className="grid gap-6 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fields.map((item, index) => (
              <div key={item.id}>
                <FormSectionContainer>
                  <div className="mb-4">
                    <Controller
                      control={control}
                      name={`teamMembers.${index}.imageURL`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <ImageUploader
                          label="Member Image"
                          onChange={onChange}
                          index={index}
                          id={`teamMembers.${index}.imageURL`}
                          imageURL={
                            props.teamMembers?.data?.teamMembers[0]
                              ?.teamMembers[index]?.imageURL || ""
                          }
                        />
                      )}
                    />
                  </div>
                  <div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900">
                        Member Name
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Member Name"
                        {...register(`teamMembers.${index}.name`)}
                      />
                    </div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900 mt-2">
                        Member Short Description
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Hero Short Description"
                        {...register(`teamMembers.${index}.description`)}
                      />
                    </div>
                  </div>
                </FormSectionContainer>
              </div>
            ))}
          </div>

          <div>
            <button
              type="button"
              className="border border-primary bg-slate-50 hover:bg-white active:bg-orange-800 px-8 py-2 text-primary font-semibold rounded-full mt-6 mr-4"
              onClick={() =>
                append({ name: "", description: "", imageURL: "" })
              }
            >
              Add Member
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-orange-600 active:bg-orange-800 px-8 py-2 text-white font-semibold rounded-full mt-6"
            >
              Submit
            </button>
          </div>
        </FormSectionContainer>
      </form>
    </>
  );
}
