import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import { ReactNode } from "react";
import { UseQueryResult } from "react-query";

export default function RenderAppropriateComponent(props: {
  queryResult: UseQueryResult<any, unknown>;
  children: ReactNode;
  loaderContainerHeightWidth?: string;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
}) {
  if (props.queryResult.isLoading) {
    if (props.loadingComponent) {
      return <>{props.loadingComponent}</>;
    }
    return (
      <Loading loaderContainerHeightWidth={props.loaderContainerHeightWidth} />
    );
  }
  if (props.queryResult.isError) {
    if (props.errorComponent) {
      return <>{props.errorComponent}</>;
    }
    return <Error />;
  }
  return <>{props.children}</>;
}
