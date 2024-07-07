import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="">
      <div className="bg-hero h-full bg-no-repeat bg-cover bg-center">
        <div className=" text-neutral-50 py-44 px-5 bg-neutral-950/60 h-full">
          <h1 className="text-4xl text-white font-bold z-20">
            Indulge in Homemade Bliss at Heavenly Delights
          </h1>
          <p className="text-lg mt-2 mb-9">
            Experience the heavenly taste of our homemade cakes, cookies, and
            pastries. Made with love and the finest ingredients.
          </p>
          <Link to={"products"} className="bg-red-600 w-full inline-block text-center py-2.5 rounded-md"> Order Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
