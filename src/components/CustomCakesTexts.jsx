import { Link } from "react-router-dom";

const CustomCakesTexts = () => {
  return (
    <div>
      <h2 className="text-sm font-semibold text-red-600 lg:text-base">
        Custom cakes
      </h2>
      <p className="mb-4 text-2xl font-semibold text-neutral-900 lg:text-3xl">
        Indulge in Our Custom Cakes and Pastries
      </p>
      <p>
        At Heavenly Delights, we offer personalized designs and unique flavors
        for all your special occasions. Whether it's a birthday, wedding, or
        anniversary, our custom cakes and pastries are sure to impress.
      </p>
      <div className="mt-7 flex flex-col gap-4">
        <div>
          <p className="font-semibold text-neutral-900 lg:text-lg">
            Personalized Designs
          </p>
          <p>
            Create a cake that reflects your style and taste with our custom
            designs.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 lg:text-lg">
            Unique Flavors
          </p>
          <p>
            Experience a wide range of delicious flavors that will delight your
            taste buds.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/contact"
          className="rounded-md border-2 border-red-600 px-4 py-2 text-red-600 hover:bg-red-700 hover:text-neutral-50 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CustomCakesTexts;
