import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  const snap = useSnapshot(state);
  return (
    <Section
      backgroundColor={snap.palette.backgroundHeader}
      containerStyle="h-full flex flex-col justify-center items-center gap-20"
      customStyle=""
      name="Contact"
    >
      <h2 className="text-center text-5xl font-bold">
        Contact <span style={{ color: snap.palette.primary }}>Me!</span>
      </h2>
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex flex-row gap-4">
          <CustomInput placeholder="Full Name" type="text" />
          <CustomInput placeholder="Email Address" type="email" />
        </div>
        <div className="flex flex-row">
          <CustomInput placeholder="Email Subject" type="text" />
        </div>
        <div className="flex flex-row">
          <textarea
            placeholder="Message..."
            className="flex-1 p-3 rounded-xl border-none outline-none"
            style={{ backgroundColor: snap.palette.background }}
            rows={10}
          ></textarea>
        </div>
        <div className="flex flex-row justify-center">
          <CustomButton title="Send Message" />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
