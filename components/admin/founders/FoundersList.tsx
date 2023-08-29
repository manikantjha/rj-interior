import { deleteFounder, getFoundersPaginated } from "@/services/apiServices";
import { IFounder } from "@/types/founder";
import DataList from "../common/dataList/DataList";
import RowListItem from "../common/dataList/RowListItem";

interface IFoundersListProps {}

export default function FoundersList(props: IFoundersListProps) {
  return (
    <DataList<IFounder>
      title="Founders"
      entityPlural="founders"
      getEntitiesPaginatedFn={getFoundersPaginated}
      deleteEntityFn={deleteFounder}
      renderListItem={(item, onEdit, onDelete) => (
        <RowListItem
          key={item._id}
          item={item}
          title={item.name}
          imageURL={item.image?.small?.url || ""}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    />
  );
}
