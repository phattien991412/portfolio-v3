import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const TestimonialsPage = dynamic(() => import("@/components/TestimonialsPage"));

export default function Home() {
  return (
    <>
      <TestimonialsPage />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
