import AboutMe from "../components/about/AboutMe";
import PersonalSection from "../components/about/PersonalSection";
import SectionWrapper from "../components/about/SectionWrapper";
import WorkSection from "../components/about/WorkSection";

const About = () => {
  return (
    <section className="py-32 flex-col flex gap-20">
      <AboutMe />
      <SectionWrapper isWork>
        <WorkSection />
      </SectionWrapper>
      <SectionWrapper>
        <PersonalSection />
      </SectionWrapper>
    </section>
  );
};

export default About;
