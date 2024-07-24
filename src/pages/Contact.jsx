import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import FooterContact from "../components/FooterContact";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <PageSection>
      <PageTitle title={"Contact"} />
      <div className="gap-5 lg:gap-10 md:flex md:items-start md:justify-between">
        <div className="md:max-w-sm lg:max-w-lg">
          <p className="mt-3">
            We would love to hear from you! Whether you have a question,
            feedback, or want to make a custom order, feel free to reach out to
            us using the form below or through our contact details.
          </p>
          <FooterContact contactPage={true} />
        </div>
        <div className="mt-14 flex-1 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
