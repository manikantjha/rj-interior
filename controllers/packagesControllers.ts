import { createGenericController } from "@/HOFs/controllersHOF";
import Package from "@/models/package";
import Service from "@/models/service";
import { packageSchema } from "@/schemas/packageSchema";
import { revalidatePath } from "@/utils/server";

export const packageControllers = createGenericController({
  Model: Package,
  schema: packageSchema,
  revalidate: async () => {
    const limit = 10;
    const totalItems = await Service.count();
    const totalPages = Math.ceil(totalItems / limit);

    for (let i = 0; i < totalPages; i++) {
      revalidatePath(`/services/${i + 1}`);
    }
  },
});
