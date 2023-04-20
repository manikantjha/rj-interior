import { objHowItStartedInfo } from "@/data/data";
import aboutRowImage from "../../public/assets/interior/10.jpg";
import ContainerWrapper from "../common/ContainerWrapper";
import Row from "../common/row/Row";

export default function StoryRow() {
  return (
    <ContainerWrapper>
      <Row
        imgSrc={aboutRowImage}
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
