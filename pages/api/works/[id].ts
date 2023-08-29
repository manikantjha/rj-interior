import { createHandler } from "@/HOFs/handlersHOF";
import workControllers from "@/controllers/worksControllers";

const handler = createHandler({
  getFunction: workControllers.getById,
  postFunction: workControllers.update,
  deleteFunction: workControllers.remove,
});

export default handler;
