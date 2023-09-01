import { IFaq } from "@/types/faq";
import { useState } from "react";
import NoData from "../common/NoData";
import RowWrapper from "../common/RowWrapper";
import Accordion from "../common/accordion/Accordion";

interface IFAQsRowProps {
  faqs: IFaq[];
}

export default function FAQsRow(props: IFAQsRowProps) {
  const data = props.faqs || [];
  const [expanded, setExpanded] = useState(1);
  if (!data.length) return <NoData containerClassName="!h-auto" />;

  return (
    <RowWrapper
      title="FAQs"
      containerWrapperClassName="min-h-[calc(100vh-76px)]"
    >
      <div>
        {data.map((item: IFaq, index: number) => (
          <Accordion
            key={index}
            objAccordion={{ ...item, _id: item._id || index.toString() }}
            expanded={expanded}
            setExpanded={setExpanded}
            listLength={data?.length}
            index={index}
          />
        ))}
      </div>
    </RowWrapper>
  );
}
