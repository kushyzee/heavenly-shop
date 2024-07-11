import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-sm text-neutral-300">
      <div className="px-4 py-8">
        <div>
          <h2 className="mb-2 text-base font-semibold">Subscribe</h2>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>

        <div className="mt-5 border-b border-neutral-600 pb-5">
          <form>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <span className="pointer-events-none absolute inset-y-0 start-2 grid text-2xl place-content-center text-neutral-300">
                <MdEmail />
              </span>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter Your email"
                className="w-full rounded-md border-neutral-200 bg-neutral-900 ps-11"
              />
            </div>
              <button type="submit" className="bg-red-600 mt-4 inline-block w-full text-center py-2.5 rounded-md text-neutral-200">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-neutral-300">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
