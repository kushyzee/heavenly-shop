import ourStory from "../assets/images/our-story.jpg"
import Team from "../components/Team";
import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
    <PageSection>
      <div className=" md:flex md:items-center md:justify-between gap-5">
        <div className="md:max-w-lg">
        <PageTitle title="Our Story" />
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
    </PageSection>
  );
};

export default About;
