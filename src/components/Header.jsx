import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/CartProvider";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const {totalItems} = state

  return (
    <header className="bg-white shadow fixed w-full top-0 z-40">
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Desktop navbar */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between p-4 lg:px-0 lg:py-8"
      >
        <Link to="/">
          <img
            alt="Heavenly Delights"
            src={logo}
            className="h-6 w-auto lg:h-7"
          />
        </Link>

        <div className="flex gap-x-6 md:hidden">
          <div className="relative">
            <Link to="/cart">
              <MdOutlineShoppingCart className="cursor-pointer text-2xl text-gray-900 transition-transform duration-200 hover:scale-110" />
              <span className="sr-only">Cart</span>
            </Link>
            {totalItems > 0 && <p className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center overflow-hidden rounded-full bg-red-600 text-center text-[10px] text-neutral-50">
              <span className="inline-block">{totalItems}</span>
            </p>}
          </div>

          {/* Mobile menu button*/}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <DesktopMenu totalItems={totalItems} />
      </nav>
    </header>
  );
};

export default Header;
