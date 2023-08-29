import { createHandler } from "@/HOFs/handlersHOF";
import workControllers from "@/controllers/worksControllers";

const handler = createHandler({
  getFunction: workControllers.getPaginated,
  postFunction: workControllers.create,
});

export default handler;
