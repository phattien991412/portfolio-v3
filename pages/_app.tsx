import { ReactNode } from "react";
import type { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";

import "@/styles/globals.css";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SEO from "@/components/SEO";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const router = useRouter();
  return (
    <>
      <SEO />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-screen">
          <Transition />
          {getLayout(<Component {...pageProps} />)}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
