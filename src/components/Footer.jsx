import FooterForm from "./FooterForm";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-sm text-neutral-400">
      <div className="px-4 pb-4 pt-8 lg:mx-auto lg:max-w-6xl">
        <div>
          <h2 className="mb-2 text-base font-semibold">Subscribe</h2>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>

        <FooterForm />
        <FooterContact />

        <p className="mt-10 text-center text-xs text-neutral-400">
          &copy; 2024 Heavenly Delights. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
