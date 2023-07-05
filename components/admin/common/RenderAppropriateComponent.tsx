import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import { ReactNode } from "react";
import { UseQueryResult } from "react-query";

export default function RenderAppropriateComponent(props: {
  queryResult: UseQueryResult<any, unknown>;
  children: ReactNode;
  loaderHeight?: string;
}) {
  if (props.queryResult.isLoading) {
    return <Loading loaderContainerHeightWidth={props.loaderHeight} />;
  }
  if (props.queryResult.isError) {
    return <Error />;
  }
  return <>{props.children}</>;
}
