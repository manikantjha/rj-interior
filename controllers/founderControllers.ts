import { createGenericController } from "@/HOFs/controllersHOF";
import Founder from "@/models/founders";
import { founderSchema } from "@/schemas/founderSchema";
import { revalidatePath } from "@/utils/server";

const founderControllers = createGenericController({
  Model: Founder,
  schema: founderSchema,
  imageKey: "image",
  revalidate: async () => {
    revalidatePath(`/about`);
  },
});

export default founderControllers;
