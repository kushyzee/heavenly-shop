import PageSection from "../components/PageSection";
import PageTitle from "../components/PageTitle";
import FooterContact from "../components/FooterContact";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <PageSection>
      <div>
        <div>
          <PageTitle title={"Contact"} />
          <p className="mt-3">
            We would love to hear from you! Whether you have a question,
            feedback, or want to make a custom order, feel free to reach out to
            us using the form below or through our contact details.
          </p>
          <FooterContact contactPage= {true} />
          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
