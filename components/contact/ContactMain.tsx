import { getContactInfos } from "@/services/apiServices";
import { useQuery } from "react-query";
import RenderAppropriateComponent from "../admin/common/RenderAppropriateComponent";
import ContainerWrapper from "../common/ContainerWrapper";
import Error from "../common/Error";
import Loading from "../common/Loading";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

interface IContactMainProps {
  containerClassName?: string;
}

export default function ContactMain(props: IContactMainProps) {
  const contactInfos = useQuery("contactInfos", () => getContactInfos());
  return (
    <ContainerWrapper
      containerClassName={`${
        props.containerClassName ? props.containerClassName : "bg-gray-50"
      }`}
    >
      <div className="bg-white shadow p-4 lg:p-8 max-w-7xl rounded-lg grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 mx-auto">
        <div className="grid grid-rows-[1fr_auto] rounded-xl p-6 border-2 border-white bg-gradient-to-br from-orange-700 to-orange-900">
          <RenderAppropriateComponent
            queryResult={contactInfos}
            loadingComponent={
              <Loading loaderContainerHeightWidth="h-full w-full" />
            }
            errorComponent={
              <Error
                containerClassName="h-[200px] w-full overflow-hidden flex justify-center items-center"
                text="Failed to load contact info :("
              />
            }
          >
            <ContactInfoCard contactInfos={contactInfos} />
          </RenderAppropriateComponent>
        </div>
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
