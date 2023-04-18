import Link from "next/link";

interface ISeeAllBtn {
  href: string;
  text?: string;
}

export default function LinkBtn(props: ISeeAllBtn) {
  return (
    <Link
      href={props.href}
      className="block mx-auto text-center p-3 font-bold bg-primary text-white rounded-full !w-[200px] hover:bg-orange-800 hover:shadow-sm"
    >
      {props.text || "See All"}
    </Link>
  );
}
