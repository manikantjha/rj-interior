import { deletePackage, getPackagesPaginated } from "@/services/apiServices";
import { IPackage } from "@/types/package";
import DataList from "../../common/dataList/DataList";
import RowListItem from "../../common/dataList/RowListItem";

interface IPackagesListProps {}

export default function PackagesList(props: IPackagesListProps) {
  return (
    <DataList<IPackage>
      title="Packages"
      entityPlural="packages"
      renderListItem={(item, onEdit, onDelete) => (
        <RowListItem
          key={item._id}
          item={item}
          title={item.title}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      deleteEntityFn={deletePackage}
      getEntitiesPaginatedFn={getPackagesPaginated}
    />
  );
}
