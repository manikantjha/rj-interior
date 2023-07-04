import { addUpdateFigure } from "@/services/apiServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseQueryResult, useMutation } from "react-query";
import * as yup from "yup";
import FormSectionContainer from "../common/FormSectionContainer";
import FormSectionWrapper from "../common/FormSectionWrapper";

type FiguresForm = {
  figures: {
    figure: string;
    description: string;
  }[];
};

interface IFigures {
  figures: UseQueryResult<any, unknown>;
}

const schema = yup
  .object({
    figures: yup.array().of(
      yup.object({
        figure: yup
          .number()
          .positive("Must be greater than 0")
          .required("Figure is required"),
        description: yup.string().required("Description is required"),
      })
    ),
  })
  .required();

export default function FiguresForm(props: IFigures) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FiguresForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      figures: props?.figures?.data?.figures
        ? props?.figures?.data?.figures[0]?.figures
        : [],
    },
  });

  const addUpdateFiguresMutation = useMutation(addUpdateFigure, {
    onSuccess: () => {},
  });

  const onSubmit = (data: FiguresForm) => {
    const id = props?.figures?.data?.figures
      ? props?.figures?.data?.figures[0]?._id
      : undefined;
    addUpdateFiguresMutation.mutate({ ...data, id: id });
  };

  return (
    <FormSectionWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSectionContainer>
          {[...Array(4)].map((item, index) => (
            <div className="grid gap-6 mb-4 md:grid-cols-2" key={index}>
              <div>
                <label
                  htmlFor={`figure${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Figure
                </label>
                <input
                  id={`figure${index}`}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Figure"
                  {...register(`figures.${index}.figure`)}
                />
                {errors.figures && errors.figures[index]?.figure && (
                  <p className="text-red-700 mt-2 text-sm">
                    * {errors.figures[index]?.figure?.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={`figure_${index}_description`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  id={`figure_${index}_description`}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Description"
                  {...register(`figures.${index}.description`)}
                />
                {errors.figures && errors.figures[index]?.description && (
                  <p className="text-red-700 mt-2 text-sm">
                    * {errors.figures[index]?.description?.message}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="w-full flex items-center space-x-4 mt-8">
            <button
              type="submit"
              className="bg-primary hover:bg-orange-600 active:bg-orange-800 px-8 py-2 text-white font-semibold rounded-full"
            >
              Submit
            </button>
          </div>
        </FormSectionContainer>
      </form>
    </FormSectionWrapper>
  );
}
