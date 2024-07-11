import homeMadeImg from "../assets/images/homemade-cakes.jpg";
import { Link } from "react-router-dom";

const HomeMadeCake = () => {
  return (
    <section className="mt-14">
      <div>
        <h2 className="mb-1 text-2xl font-semibold text-neutral-900 lg:text-3xl">
        Delicious Homemade Cakes and Pastries
        </h2>
        <p>Indulge in our heavenly treats made with love and care.</p>
        <div className="mt-8">
          <Link
            to="/products"
            className="rounded-md bg-red-600 text-neutral-50 px-4 py-2.5 mr-3 hover:bg-red-700 transition-colors duration-200"
          >
            Order Now
          </Link>
          <Link
            to="/contact"
            className="rounded-md border-2 border-red-600 px-4 py-[9px] text-red-600 hover:bg-red-700 hover:text-neutral-50 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <img className="w-full h-auto rounded-xl" src={homeMadeImg} alt="Home made Cakes" />
      </div>
    </section>
  );
};

export default HomeMadeCake;
