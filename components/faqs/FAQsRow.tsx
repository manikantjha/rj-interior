import { useState } from "react";
import { UseQueryResult } from "react-query";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import Accordion from "../common/accordion/Accordion";

interface IFAQsRowProps {
  faqs: UseQueryResult<any, unknown>;
}

export default function FAQsRow(props: IFAQsRowProps) {
  const [expanded, setExpanded] = useState(1);
  return (
    <ContainerWrapper>
      <Title title="FAQs" />

      <div>
        {props.faqs?.data?.faqs
          ? props.faqs?.data?.faqs[0]?.faqs.map((item: any, index: number) => (
              <Accordion
                key={index}
                objAccordion={item}
                expanded={expanded}
                setExpanded={setExpanded}
                listLength={props.faqs?.data?.faqs[0]?.faqs?.length}
                index={index}
              />
            ))
          : null}
      </div>
    </ContainerWrapper>
  );
}
