import { objContactInfo } from "@/data/data";
import React from "react";
import ContactInfoListItem from "./ContactInfoListItem";

export default function ContactInfoCard() {
  return (
    <div className="grid grid-rows-[1fr_auto] rounded-xl p-6 border-2 border-white bg-gradient-to-br from-orange-700 to-orange-900">
      <div className="mb-6 lg:mb-0">
        <h3 className="text-4xl text-white mb-6">Have a project in mind?</h3>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          similique non nemo incidunt illum suscipit laborum eligendi nisi
          dolores rem dicta, corrupti facilis. Magni, vero!
        </p>
      </div>
      <div className="text-base text-white font-medium">
        {objContactInfo.lstContactInfo.map((item) => (
          <ContactInfoListItem key={item.id} objContactInfo={item} />
        ))}
      </div>
    </div>
  );
}
