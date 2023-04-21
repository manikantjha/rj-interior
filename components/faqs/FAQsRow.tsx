import { lstFAQs } from "@/data/data";
import { useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import Accordion from "../common/accordion/Accordion";

export default function FAQsRow() {
  const [expanded, setExpanded] = useState(1);
  return (
    <ContainerWrapper>
      <Title title="FAQs" />

      <div>
        {lstFAQs.map((item, index) => (
          <Accordion
            key={item.id}
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
