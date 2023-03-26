import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstTestimonials } from "@/data/data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsRow() {
  return (
    <ContainerWrapper containerClassName="bg-gray-50">
      <Title title="What Our Clients Have to Say" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstTestimonials.map((item) => (
          <TestimonialCard key={item.id} objTestimonial={item} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
