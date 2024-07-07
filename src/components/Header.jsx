import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Desktop navbar */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-8"
      >
        <Link to="/">
          <img
            alt="Heavenly Delights"
            src={logo}
            className="h-6 w-auto lg:h-7"
          />
        </Link>

        <div className="flex gap-x-8 md:hidden">
          <IoCartOutline className="text-3xl text-gray-900 cursor-pointer hover:scale-110 transition-transform duration-200" />
          <span className="sr-only">Cart</span>
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

        <DesktopMenu />
      </nav>
    </header>
  );
};

export default Header;
