import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import SocialMedia from "./SocialMedia";

const FooterContact = ({ contactPage = false }) => {
  return (
    <div className={`mt-8 flex flex-col gap-5 ${contactPage && "text-zinc-700 mt-7"}`}>
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
        <span className="sr-only">
          {contactPage ? "address" : "opening days and time"}
        </span>
        {contactPage ? (
          <MdLocationPin className="text-xl" />
        ) : (
          <BsClockFill className="text-xl" />
        )}
        <p>
          {contactPage
            ? "123 Bakery Lane, Ikeja, Lagos"
            : "Mon-Fri 8am - 6pm, Sat-Sun 9am - 4pm"}{" "}
        </p>
      </div>
      {!contactPage && <SocialMedia />}
    </div>
  );
};

export default FooterContact;
