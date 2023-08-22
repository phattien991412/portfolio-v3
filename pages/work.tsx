import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const WorkPage = dynamic(() => import("@/components/WorkPage"));

export default function Home() {
  return (
    <>
      <WorkPage />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
