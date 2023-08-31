import LinkBtn from "../LinkBtn";

interface IHeroButtonProps {
  hasContactButton?: boolean;
  herf?: string;
  text?: string;
  containerClassName?: string;
  className?: string;
}

function HeroButton({
  hasContactButton,
  herf = "/contact",
  text = "Get In Touch",
  containerClassName = "",
  className = "",
}: IHeroButtonProps) {
  if (!hasContactButton) return null;
  return (
    <div className={`mt-12 ${containerClassName}`}>
      <LinkBtn
        href={herf}
        text={text}
        className={`!bg-primary hover:!bg-orange-700 text-textLight hover:text-textLight ${className}`}
      />
    </div>
  );
}

export default HeroButton;
