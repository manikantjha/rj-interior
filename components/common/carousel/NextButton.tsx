import CommonButton from "@/components/admin/common/CommonButton";
import { GetIcon } from "@/components/common/icons/icons";
import { CustomArrowProps } from "react-slick";

function NextButton({ onClick }: CustomArrowProps) {
  return (
    <CommonButton
      icon={<GetIcon name="next-arrow" />}
      onClick={onClick}
      className="absolute top-[50%] right-[-10px] translate-y-[-50%] cursor-pointer !bg-black/50 rounded-full p-2 text-white z-10"
      title="next slide"
    />
  );
}

export default NextButton;
