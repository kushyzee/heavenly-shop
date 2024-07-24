import FooterForm from "./FooterForm";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-sm text-neutral-400 md:text-base">
      <div className="gap-5 px-4 pb-4 pt-8 md:flex md:items-start md:justify-between lg:mx-auto lg:max-w-6xl lg:px-5">
        <div className="lg:max-w-xl md:max-w-md">
          <h2 className="mb-2 text-base font-semibold md:text-lg">Subscribe</h2>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div>
            <FooterForm />
          </div>
        </div>

        <div>
          <FooterContact />
        </div>
      </div>
      <p className="mt-10 pb-5 text-center text-xs md:text-sm text-neutral-400">
        &copy; 2024 Heavenly Delights. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
