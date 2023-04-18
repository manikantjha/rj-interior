import Link from "next/link";
import React from "react";

interface ISeeAllBtn {
  href: string;
  text?: string;
}

export default function SeeAllBtn(props: ISeeAllBtn) {
  return (
    <div className="mt-16">
      <Link
        href={props.href}
        className="block mx-auto text-center p-3 font-bold bg-primary text-white rounded-full !w-[200px] hover:bg-orange-800 hover:shadow-sm"
      >
        {props.text || "See All"}
      </Link>
    </div>
  );
}
