import { useFieldArray, useFormContext } from "react-hook-form";

interface IServicesListForm {
  parentIndex: number;
}

export default function ServicesListForm(props: IServicesListForm) {
  const {
    control,
    register,
    formState: { errors },
    getFieldState,
  } = useFormContext();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `services[${props.parentIndex}].list`,
  });

  return (
    <div>
      {fields.map((item, index) => {
        const fieldState = getFieldState(
          `services[${props.parentIndex}].list[${index}]`
        );
        return (
          <>
            <div key={item.id} className="mb-4">
              <label
                htmlFor={`listItem${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Service List Item {index + 1}
              </label>
              <input
                id={`listItem${index}`}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Service List Item"
                {...register(`services[${props.parentIndex}].list[${index}]`)}
              />
            </div>
            {fieldState.error && (
              <p className="text-red-700 mt-2 text-sm">
                * {fieldState.error.message}
              </p>
            )}
          </>
        );
      })}
      <div className="w-full flex items-center space-x-4 mt-8">
        <button
          type="button"
          className="bg-gray-50 border border-primary hover:bg-white active:bg-gray-200 px-3 py-1 text-primary font-semibold rounded-full"
          onClick={() => append("")}
        >
          Add List Item
        </button>
      </div>
    </div>
  );
}
