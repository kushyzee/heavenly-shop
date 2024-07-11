import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import DesktopNavLinks from "./DesktopNavLinks";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex md:gap-x-12">
      <DesktopNavLinks page="/" linkText="Home" />
      <DesktopNavLinks page="/products" linkText="Shop" />
      <DesktopNavLinks page="/about" linkText="About Us" />
      <DesktopNavLinks page="/contact" linkText="Contact" />
       
      <Link to="/cart" className="flex items-center gap-1 group">
        <div className="relative">
          <MdOutlineShoppingCart aria-hidden="true" className="text-2xl text-gray-900 group-hover:text-red-800 transition-colors duration-300" />
          <p className="absolute -right-1.5 -top-1.5 size-4 overflow-hidden rounded-full bg-red-600 text-center text-[10px] text-neutral-50 flex items-center justify-center">
              <span className="inline-block">0</span>
            </p>
        </div>
        <span className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-red-800 transition-colors duration-300">Cart</span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
