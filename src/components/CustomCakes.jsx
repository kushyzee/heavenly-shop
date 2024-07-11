import CustomCakesTexts from "./CustomCakesTexts";
import customCakeImg from "../assets/images/custom-cake.jpg"

const CustomCakes = () => {
  return (
    <section className="mt-14">
      <CustomCakesTexts />
      <div className="mt-8">
        <img className="w-full h-auto rounded-xl" src={customCakeImg} alt="custom cake" />
      </div>
    </section>
  );
};

export default CustomCakes;
