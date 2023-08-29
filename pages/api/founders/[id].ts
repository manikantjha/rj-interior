import { createHandler } from "@/HOFs/handlersHOF";
import founderControllers from "@/controllers/founderControllers";

const handler = createHandler({
  getFunction: founderControllers.getById,
  postFunction: founderControllers.update,
  deleteFunction: founderControllers.remove,
});

export default handler;
