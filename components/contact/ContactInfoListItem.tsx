interface IContactInfoListItemProps {
  objContactInfo: {
    icon: JSX.Element;
    info: string;
  };
}

export default function ContactInfoListItem(props: IContactInfoListItemProps) {
  return (
    <p className="flex items-center">
      <span>{props.objContactInfo.icon}</span>
      {props.objContactInfo.info}
    </p>
  );
}
