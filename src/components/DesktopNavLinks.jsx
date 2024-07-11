import { Link } from "react-router-dom"

const DesktopNavLinks = ({page = "/", linkText = "Home"}) => {
  return (
    <Link to={page} className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-800 transition-colors duration-300">
        {linkText}
      </Link>
  )
}

export default DesktopNavLinks