import { MdEmail, MdPhone } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import SocialMedia from "./SocialMedia";

const FooterContact = () => {
  return (
    <div className="mt-8 flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <span className="sr-only">phone number</span>
        <MdPhone className="text-xl" />
        <p>+2348108882679</p>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="sr-only">email address</span>
        <MdEmail className="text-xl" />
        <p>info@heavenlydelights.com</p>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="sr-only">phone number</span>
        <BsClockFill className="text-xl" />
        <p>+2348108882679</p>
      </div>
      <SocialMedia />
    </div>
  );
};

export default FooterContact;
