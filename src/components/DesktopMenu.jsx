import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
        Home
      </Link>
      <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
        About Us
      </Link>
      <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
        Contact
      </Link>
      <Link to="/cart">
        <IoCartOutline aria-hidden="true" className="text-3xl text-gray-900" />
        <span className="sr-only">Cart</span>
      </Link>
    </div>
  );
};

export default DesktopMenu;
