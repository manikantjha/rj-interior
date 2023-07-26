import { addUpdateFounder, addUpdateTeamMember } from "@/services/apiServices";
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

type FoundersForm = {
  founders: {
    name: string;
    imageURL: string;
    designation: string;
    description: string;
  }[];
};

interface ITeamMembersFormProps {
  founders?: UseQueryResult<any, unknown>;
}

const schema = yup.object({
  founders: yup.array().of(
    yup.object({
      imageURL: yup.string(),
      name: yup.string().required("Name is required"),
      description: yup.string().required("Description is required"),
      designation: yup.string().required("Designation is required"),
    })
  ),
});

export default function FoundersForm(props: ITeamMembersFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FoundersForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      founders: props.founders?.data?.founders
        ? props.founders?.data?.founders[0]?.founders
        : [{ name: "", description: "", imageURL: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "founders",
  });

  const addUpdateFounderMutation = useMutation(addUpdateFounder, {
    onSuccess: () => {},
  });

  console.log("props.founders?.data?.founders", props.founders?.data);

  function deleteFile(index: number) {
    if (
      !(
        props.founders?.data?.founders &&
        props.founders?.data?.founders[0]?.founders[index]?.imageURL
      )
    ) {
      return;
    }
    const imageRef = ref(
      storage,
      (props.founders?.data?.founders &&
        props.founders?.data?.founders[0]?.founders[index]?.imageURL) ||
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
    const id = props.founders?.data?.founders
      ? props.founders?.data?.founders[0]?._id
      : "";
    addUpdateFounderMutation.mutate(
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
                  <div className="mb-4">
                    <Controller
                      control={control}
                      name={`founders.${index}.imageURL`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <ImageUploader
                          label="Member Image"
                          onChange={onChange}
                          index={index}
                          id={`founders.${index}.imageURL`}
                          imageURL={
                            (props.founders?.data?.founders &&
                              props.founders?.data?.founders[0]?.founders[index]
                                ?.imageURL) ||
                            ""
                          }
                        />
                      )}
                    />
                  </div>
                  <div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900">
                        Founder Name
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Founder Name"
                        {...register(`founders.${index}.name`)}
                      />
                      {errors.founders && errors.founders[index]?.name && (
                        <p className="text-red-700 text-sm">
                          * {errors.founders[index]?.name?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900">
                        Founder Designation
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Founder Designation"
                        {...register(`founders.${index}.designation`)}
                      />
                      {errors.founders &&
                        errors.founders[index]?.designation && (
                          <p className="text-red-700 text-sm">
                            * {errors.founders[index]?.designation?.message}
                          </p>
                        )}
                    </div>
                    <div>
                      <p className="block mb-2 text-sm font-medium text-gray-900 mt-2">
                        Founder Short Description
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Hero Short Description"
                        {...register(`founders.${index}.description`)}
                      />
                      {errors.founders &&
                        errors.founders[index]?.description && (
                          <p className="text-red-700 text-sm">
                            * {errors.founders[index]?.description?.message}
                          </p>
                        )}
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
                  designation: "",
                })
              }
              text="Add Founder"
            />
            <SubmitButton isLoading={addUpdateFounderMutation.isLoading} />
          </div>
        </FormSectionContainer>
      </form>
      <Toast />
    </>
  );
}
