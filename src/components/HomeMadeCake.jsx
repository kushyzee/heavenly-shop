import { Link } from "react-router-dom";

const HomeMadeCake = () => {
  return (
    <section className="mt-14 items-center justify-between text-base md:flex md:flex-row-reverse md:gap-7 lg:mt-20 lg:text-lg xl:mt-28">
      <div>
        <h2 className="mb-1 text-2xl font-semibold text-neutral-900 lg:text-3xl">
          Delicious Homemade Cakes and Pastries
        </h2>
        <p>Indulge in our heavenly treats made with love and care.</p>
        <div className="mt-8 lg:mt-10">
          <Link
            to="/products"
            className="mr-3 rounded-md bg-red-600 px-4 py-2.5 text-neutral-50 transition-colors duration-200 hover:bg-red-700"
          >
            Order Now
          </Link>
          <Link
            to="/contact"
            className="rounded-md border-2 border-red-600 px-4 py-[9px] text-red-600 transition-colors duration-200 hover:bg-red-700 hover:text-neutral-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:max-w-96 lg:max-w-md">
        <img height="300px"
          width="320px"
          loading="lazy"
          className="h-auto w-full rounded-xl"
          src="https://ik.imagekit.io/kushyzee/heavenly_delights/homemade-cakes_rlkNkRhkW.jpg"
          alt="Home made Cakes"
        />
      </div>
    </section>
  );
};

export default HomeMadeCake;
