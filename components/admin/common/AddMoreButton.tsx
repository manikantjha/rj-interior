interface IAddMoreButtonProps {
  onClick: any;
  text: string;
}

export default function AddMoreButton(props: IAddMoreButtonProps) {
  return (
    <button
      type="button"
      className="bg-gray-50 border border-primary hover:bg-white active:bg-gray-200 px-8 py-[6px] text-primary font-semibold rounded-full"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
