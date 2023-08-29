import * as yup from "yup";

export const packageSchema = yup
  .object({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    list: yup.array().of(yup.string().required("List item is required")),
  })
  .required();
