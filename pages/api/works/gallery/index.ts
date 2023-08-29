import { createHandler } from "@/HOFs/handlersHOF";
import { getWorksForGalleryPaginated } from "@/controllers/worksControllers";

const handler = createHandler({
  getFunction: getWorksForGalleryPaginated,
});

export default handler;
