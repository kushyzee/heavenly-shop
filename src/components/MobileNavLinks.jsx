import { Link } from "react-router-dom";

const MobileNavLinks = (props) => {
  const { page = "/", linkText = "Home", setMobileMenuOpen } = props;

  return (
    <Link
      to={page}
      onClick={() => setMobileMenuOpen(false)}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {linkText}
    </Link>
  );
};

export default MobileNavLinks;
