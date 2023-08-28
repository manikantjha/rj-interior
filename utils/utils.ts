import { UseQueryResult } from "react-query";

export const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export function checkForData(key: string, data?: UseQueryResult<any, unknown>) {
  if (!data) return null;

  if (
    !data?.data?.[key] ||
    !data?.data?.[key][0] ||
    !data?.data?.[key][0]?.[key] ||
    !data?.data?.[key][0]?.[key]?.length
  ) {
    return null;
  }

  return data?.data?.[key][0]?.[key];
}
