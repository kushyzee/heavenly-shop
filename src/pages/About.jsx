import ourStory from "../assets/images/our-story.jpg"
import Team from "../components/Team";

const About = () => {
  return (
    <section className="px-5 my-14 md:my-20 text-gray-700 text-base md:text-lg md:max-w-5xl mx-auto max-w-xl">
      <div className=" md:flex md:items-center md:justify-between gap-5">
        <div className="md:max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Story</h1>
          <p className="mt-3">
            Welcome to Heavenly Delights! Our bakery was founded with a passion
            for creating delicious and beautiful baked goods. It all started when
            our founder, Emily Brown, began baking for friends and family.
          </p>
          <p className="mt-2">
            What began as a hobby quickly turned into a beloved local bakery. Our
            mission is to provide the community with high-quality, homemade treats
            that bring joy to every occasion.
          </p>
        </div>
        <img className="w-full mt-6 rounded-xl md:max-w-sm lg:max-w-md" src={ourStory} alt="Our story image" />
      </div>

      <Team /> 
    </section>
  );
};

export default About;
