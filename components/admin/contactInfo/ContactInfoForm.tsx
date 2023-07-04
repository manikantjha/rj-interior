import { phoneRegEx } from "@/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import { UseQueryResult, useMutation } from "react-query";
import { addUpdateContactInfo } from "@/services/apiServices";

type ContactInfoForm = {
  title: string;
  description: string;
  email: string;
  phone1: string;
  phone2: string | undefined;
  address: string;
};

interface IContactInfoFormProps {
  contactInfos: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    email: yup.string().email().required("Email is required"),
    phone1: yup
      .string()
      .matches(phoneRegEx, "Please provide a valid phone number")
      .required("Phone number is required"),
    phone2: yup
      .string()
      .matches(phoneRegEx, "Please provide a valid phone number"),
    address: yup.string().required("Address is required"),
  })
  .required();

export default function ContactInfoForm(props: IContactInfoFormProps) {
  const defaults = props?.contactInfos?.data?.contactInfos
    ? { ...props?.contactInfos?.data?.contactInfos[0] }
    : {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInfoForm>({
    resolver: yupResolver(schema),
    defaultValues: defaults,
  });

  const addUpdateContactInfosMutation = useMutation(addUpdateContactInfo, {
    onSuccess: () => {},
  });

  const onSubmit = (data: ContactInfoForm) => {
    const id = props?.contactInfos?.data?.contactInfos
      ? props?.contactInfos?.data?.contactInfos[0]?._id
      : undefined;
    addUpdateContactInfosMutation.mutate({ ...data, id: id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSectionContainer>
        <div className="grid gap-4 mb-4">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Section title"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="Short section description"
              {...register("description")}
            ></textarea>
            {errors.description && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.description.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone 1
            </label>
            <input
              id="phone1"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Phone number"
              {...register("phone1")}
            />
            {errors.phone1 && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.phone1.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone2"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone 2
            </label>
            <input
              id="phone2"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Phone number"
              {...register("phone2")}
            />
            {errors.phone2 && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.phone2.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.address.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full mt-8">
          <button
            type="submit"
            className="bg-primary hover:bg-orange-600 active:bg-orange-800 px-8 py-2 text-white font-semibold rounded-full"
          >
            Submit
          </button>
        </div>
      </FormSectionContainer>
    </form>
  );
}
