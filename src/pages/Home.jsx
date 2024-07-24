import { Link } from "react-router-dom";
import BestSellers from "../components/BestSellers";
import CustomCakes from "../components/CustomCakes";
import HomeMadeCake from "../components/HomeMadeCake";

const Home = () => {
  return (
    <section className="mt-14">
      <div className="bg-hero h-full bg-no-repeat bg-cover bg-center">
        <div className=" text-neutral-50 py-44 px-4 md:px-5 bg-neutral-950/60 h-full">
          <div className="max-w-6xl w-full mx-auto">
            <div className="md:max-w-md ">
              <h1 className="text-4xl lg:text-5xl text-white font-bold z-20">
                Indulge in Homemade Bliss at Heavenly Delights
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mt-2 lg:mt-5 mb-9 lg:mb-12">
                Experience the heavenly taste of our homemade cakes, cookies, and
                pastries. Made with love and the finest ingredients.
              </p>
              <Link to={"products"} className="bg-red-600 w-full inline-block text-center py-2.5 rounded-md hover:bg-red-700 transition-colors duration-300"> Order Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 mb-11 md:mb-20 text-base text-neutral-600 mx-4 max-w-6xl lg:mx-auto">
        <div className="lg:px-5">
          <BestSellers />
          <CustomCakes />
          <HomeMadeCake />
        </div>
      </div>
    </section>
  );
};

export default Home;
