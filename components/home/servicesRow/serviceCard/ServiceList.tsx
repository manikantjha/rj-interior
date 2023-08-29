import ServiceListItem from "./ServiceListItem";

interface IServicesListProps {
  list: string[];
}

function ServiceList({ list }: IServicesListProps) {
  if (!list.length) return null;

  return (
    <div className="p-5 md:p-6">
      <ul role="list" className="space-y-2">
        {list.map((item, index) => (
          <ServiceListItem key={index} listItem={item} />
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
