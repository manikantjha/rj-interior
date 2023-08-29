import { IRowTheme } from "@/types/row";
import Link from "next/link";

interface ISeeAllBtn extends IRowTheme {
  href: string;
  text?: string;
  className?: string;
}

export default function LinkBtn({
  href,
  text = "See All",
  theme,
  className = "",
}: ISeeAllBtn) {
  return (
    <Link
      href={href}
      className={`block mx-auto text-center p-3 font-bold ${
        theme === "dark"
          ? "bg-primary hover:bg-primary-light text-white"
          : "bg-neutral-dark hover:bg-neutral-darker text-white"
      } rounded-full !w-[200px] hover:shadow-sm ${className}`}
    >
      {text}
    </Link>
  );
}
