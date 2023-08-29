import CommonLinkButton from "@/components/admin/common/CommonLinkButton";
import { IRowTheme } from "@/types/row";
import { IService } from "@/types/service";
import ServiceCard from "./serviceCard/ServiceCard";

interface IServicesRowProps extends IRowTheme {
  containerClassName?: string;
  showButton?: boolean;
  services: IService[];
}

export default function ServicesRow(props: IServicesRowProps) {
  const services: IService[] = props.services || [];

  if (!services.length) return null;

  return (
    <>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            list={item.list || []}
            title={item.title}
            theme={props.theme}
          />
        ))}
      </div>
      {props.showButton && (
        <CommonLinkButton
          href="/services/1"
          className="mt-16 w-fit font-bold mx-auto px-8 py-3"
        >
          See All Services
        </CommonLinkButton>
      )}
    </>
  );
}
