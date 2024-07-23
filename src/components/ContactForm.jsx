import InputField from "./InputField";

const ContactForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-6 mb-10">
        <InputField label="First Name" type="text" labelFor="first-name" />
        <InputField label="Last Name" type="text" labelFor="last-name" />
        <InputField label="Email" type="email" labelFor="email" />
        <InputField label="Phone Number" type="tel" labelFor="phone-number" />
        <InputField label="Message" labelFor="message" textArea={true} />
      </div>
      <button type="submit" className="px-4 py-2.5 bg-red-600 rounded-lg text-neutral-50 text-base font-normal w-full text-center">Send Message</button>
    </form>
  );
};

export default ContactForm;
