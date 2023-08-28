interface IFormSectionTitleProps {
  title: string;
}

export default function FormSectionTitle(props: IFormSectionTitleProps) {
  return <h2 className="text-2xl font-bold mb-6">{props.title}</h2>;
}
