import { useRef, useState } from "react";

import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import emailjs from "@emailjs/browser";

import Input from "../Input";
import { fadeIn } from "@/variants";
import Circle from "../AboutPage/Circle";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const regexPhone = /^([0-9]){0,10}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const formRef = useRef<HTMLFormElement>(null);

  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState(true);

  const handleOnChange = (type: string, value: string) => {
    setValueInput({
      ...valueInput,
      [type]: value
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    const checkNull = Object.values(valueInput).every((value) => value !== "");
    const checkEmail = regexEmail.test(valueInput.email);

    if (!checkNull) {
      toast.error("Please fill all input!");
      return;
    }

    if (!checkEmail) {
      toast.error("Email is invalid!");
      return;
    }

    event.preventDefault();

    emailjs
      .sendForm(
        "service_asuydur",
        "template_1cqphep",
        formRef.current!,
        "ovH8hoBhBwArofSJI"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Thank you for contacting !");

            setValueInput({
              name: "",
              email: "",
              subject: "",
              message: ""
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            onSubmit={handleSubmit}
            ref={formRef}
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
                  value={valueInput.name}
                  onChange={(e) => handleOnChange("name", e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  value={valueInput.email}
                  onChange={(e) => handleOnChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="-mt-8">
              <Input
                id="subject"
                type="text"
                label="Subject"
                name="subject"
                value={valueInput.subject}
                onChange={(e) => handleOnChange("subject", e.target.value)}
              />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="textarea"
                value={valueInput.message}
                onChange={(e) => handleOnChange("message", e.target.value)}
              />

              <button
                type="submit"
                onClick={handleSubmit}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
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
