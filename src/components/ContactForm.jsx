import InputField from "./InputField";
import toastify from "../utils/toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toastify("Message Sent", "success");

    // TODO: SET TIMEOUT WITH USE EFFECT
    // const setTime = setTimeout(navigate("/"), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-10 flex flex-col gap-6">
        <InputField label="First Name" type="text" labelFor="first-name" />
        <InputField label="Last Name" type="text" labelFor="last-name" />
        <InputField label="Email" type="email" labelFor="email" />
        <InputField label="Phone Number" type="tel" labelFor="phone-number" />
        <InputField label="Message" labelFor="message" textArea={true} />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-base font-normal text-neutral-50 lg:text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
