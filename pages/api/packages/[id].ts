import { createHandler } from "@/HOFs/handlersHOF";
import { packageControllers } from "@/controllers/packagesControllers";

const handler = createHandler({
  getFunction: packageControllers.getById,
  postFunction: packageControllers.update,
  deleteFunction: packageControllers.remove,
});

export default handler;
