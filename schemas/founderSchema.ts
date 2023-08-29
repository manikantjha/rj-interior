import * as yup from "yup";
import { imageSchema } from "./imageSchemas";

export const founderSchema = yup.object({
  image: imageSchema.required("Image is required"),
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  designation: yup.string().required("Designation is required"),
});
