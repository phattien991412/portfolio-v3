import { motion } from "framer-motion";
import Circle from "../AboutPage/Circle";
import { fadeIn } from "@/variants";
import Input from "../Input";
import { BsArrowRight } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="relative h-full w-full bg-primary/30 py-24 md:py-16 xl:py-32 text-center xl:text-left">
      <Circle />
      <div className="w-11/12 lg:w-3/5 mx-auto text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="w-full">
                <Input
                  id="name"
                  type="text"
                  label="Name"
                  name="name"
                  // value="Name"
                />
              </div>
              <div className="w-full">
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  // value="Email"
                />
              </div>
            </div>

            <div className="-mt-8">
              <Input
                id="subject"
                type="text"
                label="Subject"
                name="subject"
                // value="Subject"
              />

              <textarea placeholder="Message" className="textarea" />

              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let's talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
