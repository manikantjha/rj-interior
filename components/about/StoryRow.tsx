import { objHowItStartedInfo } from "@/data/data";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";

export default function StoryRow() {
  return (
    <ContainerWrapper>
      <Title title="How it Started" />
      {objHowItStartedInfo.description}
    </ContainerWrapper>
  );
}
