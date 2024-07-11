import { MdEmail } from "react-icons/md";

const FooterForm = () => {
  return (
    <div className="mt-5 border-b border-neutral-600 pb-5">
      <form>
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-2xl text-neutral-400">
            <MdEmail />
          </span>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter Your email"
            className="w-full rounded-md border-neutral-400 bg-neutral-900 ps-11 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-400"
          />
        </div>
        <button
          type="submit"
          className="mt-4 inline-block w-full rounded-md bg-red-600 py-2.5 text-center text-neutral-200 transition-colors duration-300 hover:bg-red-700"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-2 text-xs">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </p>
    </div>
  );
};

export default FooterForm;
