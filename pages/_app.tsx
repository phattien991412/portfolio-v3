import { ReactNode } from 'react';
import type { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';

import '@/styles/globals.css'

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const router = useRouter();
  return <>
   <AnimatePresence mode='wait'>
    <motion.div key={router.route} className='h-screen' >
    <Transition/>
   {getLayout(<Component {...pageProps} />)}
    </motion.div>
   </AnimatePresence>
  </>
};

export default MyApp;