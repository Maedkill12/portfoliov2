import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const snap = useSnapshot(state);
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_dd8quvl",
        "template_48g5we4",
        ref?.current ?? "",
        "JbkqNf_m39oVj_Mdh"
      );
      alert("Message sent");
      ref.current?.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      backgroundColor={snap.palette.backgroundHeader}
      containerStyle="h-full flex flex-col pt-[60px] md:pt-0 justify-start md:justify-center items-center gap-4 sm:gap-20"
      customStyle=""
      name="Contact"
    >
      <motion.h2
        {...slideAnimation("down")}
        className="text-center text-5xl font-bold"
      >
        Contact <span style={{ color: snap.palette.primary }}>Me!</span>
      </motion.h2>
      <p>maed012014@gmail.com</p>
      <motion.form
        {...slideAnimation("up")}
        ref={ref}
        onSubmit={handleSubmit}
        className="max-w-full"
      >
        <div className="max-w-full flex flex-col gap-4 w-[350px] sm:w-[600px]">
          <div className="flex flex-col sm:flex-row gap-4 ">
            <CustomInput
              options={{ placeholder: "Full Name", type: "text", name: "name" }}
            />
            <CustomInput
              options={{
                placeholder: "Email Address",
                type: "email",
                name: "email",
              }}
            />
          </div>
          <div className="flex flex-row">
            <CustomInput
              options={{
                placeholder: "Email Subject",
                type: "text",
                name: "subject",
              }}
            />
          </div>
          <div className="flex flex-row">
            <textarea
              placeholder="Message..."
              name="message"
              className="flex-1 p-3 rounded-xl border-none outline-none"
              style={{ backgroundColor: snap.palette.background }}
              rows={10}
            ></textarea>
          </div>
          <div className="flex flex-row justify-center">
            <CustomButton title="Send Message" options={{ type: "submit" }} />
          </div>
        </div>
      </motion.form>
    </Section>
  );
};

export default Contact;
