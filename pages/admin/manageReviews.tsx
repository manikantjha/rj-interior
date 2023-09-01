import FormSectionTitle from "@/components/admin/common/FormSectionTitle";
import RenderAppropriateComponent from "@/components/admin/common/RenderAppropriateComponent";
import ReviewList from "@/components/admin/manageReviews/ReviewsList";
import AdminLayout from "@/layout/admin/AdminLayout";
import { getReviewsPaginated } from "@/services/apiServices";
import Head from "next/head";
import { useQuery } from "react-query";

export default function ManageReviewsAdminPage() {
  const reviews = useQuery({
    queryKey: "manageReviews",
    queryFn: () => getReviewsPaginated(1, 10),
  });

  return (
    <>
      <Head>
        <title>Manage Reviews</title>
        <meta
          name="description"
          content="RJ Interior Admin Manage Reviews Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <FormSectionTitle title="Manage Reviews" />
        <RenderAppropriateComponent
          queryResult={reviews}
          containerSize="h-[400px] w-full"
        >
          <ReviewList reviews={reviews} />
        </RenderAppropriateComponent>
      </AdminLayout>
    </>
  );
}
