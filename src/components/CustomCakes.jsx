import CustomCakesTexts from "./CustomCakesTexts";

const CustomCakes = () => {
  return (
    <section className="mt-14 gap-5 md:flex md:items-start md:justify-between lg:mt-20 lg:gap-10">
      <CustomCakesTexts />
      <div className="mt-8 md:max-w-96 lg:max-w-md mx-auto rounded-xl md:mt-10">
        <img
          height="300px"
          width="320px"
          loading="lazy"
          className="h-auto w-full rounded-xl object-contain"
          src="https://ik.imagekit.io/kushyzee/heavenly_delights/custom-cake_bf77zmcYc.jpg"
          alt="custom cake"
        />
      </div>
    </section>
  );
};

export default CustomCakes;
