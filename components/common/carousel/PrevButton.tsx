import CommonButton from "@/components/admin/common/CommonButton";
import { GetIcon } from "@/components/common/icons/icons";
import { CustomArrowProps } from "react-slick";

function PrevButton({ onClick }: CustomArrowProps) {
  return (
    <CommonButton
      icon={<GetIcon name="prev-arrow" />}
      className="absolute top-[50%] left-[-10px] translate-y-[-50%] cursor-pointer !bg-black/50 rounded-full p-2 text-white z-10"
      onClick={onClick}
      title="previous slide"
    />
  );
}

export default PrevButton;
