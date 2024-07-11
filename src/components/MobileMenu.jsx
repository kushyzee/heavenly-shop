import { Dialog, DialogPanel } from "@headlessui/react";
import { FaX } from "react-icons/fa6";
import logo from "../assets/images/logo.svg";
import MobileNavLinks from "./MobileNavLinks";

const MobileMenu = (props) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="md:hidden"
    >
      {/* <div className="fixed inset-0 z-10" /> */}
      <DialogPanel
        onClick={() => {
          setMobileMenuOpen(false);
        }}
        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black/40"
      >
        <div className="ml-auto h-full w-5/6 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <img alt="Heavenly Delights" src={logo} className="h-6 w-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaX aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-20 flow-root">
            <div className="">
              <div className="space-y-2 py-4">
                <MobileNavLinks
                  page="/"
                  linkText="Home"
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                <MobileNavLinks
                  page="/products"
                  linkText="Shop"
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                <MobileNavLinks
                  page="/about"
                  linkText="About Us"
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                <MobileNavLinks
                  page="/contact"
                  linkText="Contact"
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default MobileMenu;
