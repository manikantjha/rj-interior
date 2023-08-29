import { createHandler } from "@/HOFs/handlersHOF";
import founderControllers from "@/controllers/founderControllers";

const handler = createHandler({
  getFunction: founderControllers.getPaginated,
});

export default handler;
