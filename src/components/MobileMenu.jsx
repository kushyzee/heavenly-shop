import { Dialog, DialogPanel } from "@headlessui/react";
import { FaX } from "react-icons/fa6";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
        className="fixed inset-y-0 right-0 z-10 w-full bg-black/40 overflow-y-auto "
      >
        <div className="h-full overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10 px-6 py-6 sm:max-w-sm w-5/6 ml-auto">
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>
                <Link
                  to="about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default MobileMenu;
