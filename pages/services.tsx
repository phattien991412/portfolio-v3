import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const ServicesPage = dynamic(() => import("@/components/ServicesPage"));

export default function Home() {
  return (
    <>
      <ServicesPage />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
