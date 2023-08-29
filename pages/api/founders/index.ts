import { createHandler } from "@/HOFs/handlersHOF";
import founderControllers from "@/controllers/founderControllers";

const handler = createHandler({
  getFunction: founderControllers.getAll,
  postFunction: founderControllers.create,
});

export default handler;
