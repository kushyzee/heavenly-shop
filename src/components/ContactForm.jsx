import InputField from "./InputField";
import toastify from "../utils/toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, message);

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      toastify("Please fill in all fields", "error", 4000);
      return;
    }

    toastify("Message sent successfully", "success", 2000);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-10 flex flex-col gap-6">
        <InputField
          label="First Name"
          type="text"
          labelFor="first-name"
          value={firstName}
          handleChange={handleFirstNameChange}
        />
        <InputField
          label="Last Name"
          type="text"
          labelFor="last-name"
          value={lastName}
          handleChange={handleLastNameChange}
        />
        <InputField
          label="Email"
          type="email"
          labelFor="email"
          value={email}
          handleChange={handleEmailChange}
        />
        <InputField
          label="Phone Number"
          type="tel"
          labelFor="phone-number"
          value={phone}
          handleChange={handlePhoneChange}
        />
        <InputField
          label="Message"
          labelFor="message"
          textArea={true}
          value={message}
          handleChange={handleMessageChange}
        />
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
