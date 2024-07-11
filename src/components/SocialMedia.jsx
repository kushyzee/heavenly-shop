import { FaTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="mt-3 flex items-center gap-3">
      <a href="https://twitter.com/kushyzee" target="_blank" rel="noopener noreferrer" className="">
        <FaTwitter className="size-7 rounded-full border-2 border-neutral-400 p-1.5 transition-colors duration-300 hover:border-red-400 hover:text-red-400" />
        <span className="sr-only">Follow us on Twitter</span>
      </a>

      <a href="https://www.instagram.com/iam_kushyzeena/" target="_blank" rel="noopener noreferrer" className="">
        <FaInstagram className="duration-400 size-7 rounded-full border-2 border-neutral-400 p-1.5 transition-colors hover:border-red-400 hover:text-red-400" />
        <span className="sr-only">Follow us on Instagram</span>
      </a>

      <a href="https://www.tiktok.com/@zeenaoo7" target="_blank" rel="noopener noreferrer" className="">
        <FaTiktok className="size-7 rounded-full border-2 border-neutral-400 p-1.5 transition-colors duration-300 hover:border-red-400 hover:text-red-400" />
        <span className="sr-only">Follow us on tiktok</span>
      </a>
    </div>
  );
};

export default SocialMedia;
