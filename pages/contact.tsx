import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const ContactPage = dynamic(() => import("@/components/ContactPage"));

export default function Home() {
  return (
    <>
      <ContactPage />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
