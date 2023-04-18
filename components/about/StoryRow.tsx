import { objHowItStartedInfo } from "@/data/data";
import ContainerWrapper from "../common/ContainerWrapper";
import Title from "../common/Title";
import Row from "../common/row/Row";

export default function StoryRow() {
  return (
    <ContainerWrapper>
      {/* <Title title="How it Started" /> */}
      <Row
        imgSrc="https://images.unsplash.com/photo-1598350742412-8fe67cd5375b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        renderRightColumn={() => (
          <div>
            <h2 className="text-4xl mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto text-base text-gray-500">
              {objHowItStartedInfo.description}
            </div>
          </div>
        )}
      />
    </ContainerWrapper>
  );
}
