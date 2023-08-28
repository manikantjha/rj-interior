import { phoneRegEx } from "@/utils/utils";
import * as yup from "yup";

export const phoneSchemaOptional = yup
  .string()
  .test("phone", "Please provide a valid phone number", function (value) {
    // Check if the value is not empty, if empty reutn true
    if (!value) {
      return true;
    }
    // Check if the value matches the phone reg ex
    if (value && phoneRegEx.test(value)) {
      return phoneRegEx.test(value);
    }

    return false;
  });
