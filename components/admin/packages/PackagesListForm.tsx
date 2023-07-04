import { useFormContext, useFieldArray } from "react-hook-form";

interface IPackagesListForm {
  parentIndex: number;
}

export default function PackagesListForm(props: IPackagesListForm) {
  const { register, control, getFieldState } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `packages[${props.parentIndex}].list`,
  });

  return (
    <div>
      <div>
        {fields.map((item, index) => {
          const fieldState = getFieldState(
            `packages.${props.parentIndex}.list.${index}`
          );
          return (
            <>
              <div key={item.id}>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Package List Item
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Package list item"
                  {...register(`packages[${props.parentIndex}].list[${index}]`)}
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
      </div>
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
