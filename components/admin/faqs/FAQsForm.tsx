import { addUpdateFAQ } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";

type FAQsForm = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

interface IFAQsForm {
  faqs: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    faqs: yup.array().of(
      yup.object({
        question: yup.string().required("Question is required"),
        answer: yup.string().required("Answer is required"),
      })
    ),
  })
  .required();

export default function FAQsForm(props: IFAQsForm) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FAQsForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      faqs: props?.faqs?.data?.faqs
        ? props?.faqs?.data?.faqs[0]?.faqs
        : [{ question: "", answer: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const addUpdateFAQsMutation = useMutation(addUpdateFAQ, {
    onSuccess: () => {},
  });

  const onSubmit = (data: FAQsForm) => {
    const id = props?.faqs?.data?.faqs
      ? props?.faqs?.data?.faqs[0]?._id
      : undefined;
    addUpdateFAQsMutation.mutate({ ...data, id: id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSectionContainer>
        {fields.map((item, index) => (
          <FormSectionContainer key={item.id} className="mb-4">
            <div className="grid gap-4 mb-4">
              <div>
                <label
                  htmlFor={`question${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Question {index + 1}
                </label>
                <input
                  id={`question${index}`}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Question"
                  {...register(`faqs.${index}.question`)}
                />
                {errors.faqs && errors.faqs[index]?.question && (
                  <p className="text-red-700 mt-2 text-sm">
                    * {errors.faqs[index]?.question?.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={`answer${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Answer
                </label>
                <textarea
                  id={`answer${index}`}
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                  placeholder="Answer..."
                  {...register(`faqs.${index}.answer`)}
                ></textarea>
                {errors.faqs && errors.faqs[index]?.answer && (
                  <p className="text-red-700 mt-2 text-sm">
                    * {errors.faqs[index]?.answer?.message}
                  </p>
                )}
              </div>
            </div>
          </FormSectionContainer>
        ))}
        <div className="w-full flex items-center space-x-4 mt-8">
          <button
            type="button"
            className="bg-gray-50 border border-primary hover:bg-white active:bg-gray-200 px-8 py-2 text-primary font-semibold rounded-full"
            onClick={() => append({ question: "", answer: "" })}
          >
            Add More FAQ
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
  );
}
