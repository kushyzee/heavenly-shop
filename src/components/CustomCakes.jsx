import CustomCakesTexts from "./CustomCakesTexts";

const CustomCakes = () => {
  return (
    <section className="mt-14 gap-5 md:flex md:items-start md:justify-between lg:mt-20 lg:gap-10">
      <CustomCakesTexts />
      <div className="mt-8 md:mt-10 max-w-lg rounded-xl">
        <img
          className="h-auto rounded-xl object-contain"
          src="https://ik.imagekit.io/kushyzee/heavenly_delights/custom-cake_bf77zmcYc.jpg?updatedAt=1721850307465"
          alt="custom cake"
        />
      </div>
    </section>
  );
};

export default CustomCakes;
