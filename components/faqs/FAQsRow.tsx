import { lstFAQs } from "@/data/data";
import { useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import Accordion from "../common/accordion/Accordion";
import { UseQueryResult } from "react-query";

interface IFAQsRowProps {
  faqs: UseQueryResult<any, unknown>;
}

export default function FAQsRow(props: IFAQsRowProps) {
  const [expanded, setExpanded] = useState(1);
  return (
    <ContainerWrapper>
      <Title title="FAQs" />

      <div>
        {props.faqs?.data?.faqs[0]?.faqs.map((item: any, index: number) => (
          <Accordion
            key={index}
            objAccordion={item}
            expanded={expanded}
            setExpanded={setExpanded}
            listLength={lstFAQs.length}
            index={index}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}
