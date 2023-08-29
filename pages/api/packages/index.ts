import { createHandler } from "@/HOFs/handlersHOF";
import { packageControllers } from "@/controllers/packagesControllers";

const handler = createHandler({
  getFunction: packageControllers.getAll,
  postFunction: packageControllers.create,
});

export default handler;
