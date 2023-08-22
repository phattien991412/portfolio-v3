import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const AboutPage = dynamic(() => import("@/components/AboutPage"));

export default function Home() {
  return (
    <>
      <AboutPage />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
