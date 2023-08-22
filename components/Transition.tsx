import { motion } from "framer-motion";

const Transition = () => {
  const transitionVariant = {
    initial: {
      x: "100%",
      width: "100%"
    },
    animate: {
      x: "0%",
      width: "0%"
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"]
    }
  };
  return <div> 
    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-[#2e2257]" variants={transitionVariant} initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>

    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-[#3b2d71]" variants={transitionVariant} initial='initial' animate='animate' exit='exit' transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>

    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-[#4b3792]" variants={transitionVariant} initial='initial' animate='animate' exit='exit' transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}></motion.div>

  </div>;
};

export default Transition;
