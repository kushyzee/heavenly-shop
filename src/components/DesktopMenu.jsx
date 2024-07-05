import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex md:gap-x-12">
      <Link to="/" className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-800 transition-colors duration-300">
        Home
      </Link>
      <Link to="/about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-800 transition-colors duration-300">
        About Us
      </Link>
      <Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-800 transition-colors duration-300">
        Contact
      </Link>
      <Link to="/cart">
        <IoCartOutline aria-hidden="true" className="text-3xl text-gray-900 hover:text-red-900 transition-all duration-200 hover:scale-105" />
        <span className="sr-only">Cart</span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
