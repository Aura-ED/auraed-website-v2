import AboutUs from "../../components/about/AboutUs";
import Members from "../../components/about/Members";
import SecondaryCover from "../../layouts/secondaryCover";

const About = () => {
  return (
    <div className="">
      <SecondaryCover
        title="About"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <div className="pageAnimation">
      <AboutUs />
        <Members />
        </div>
    </div>
  );
};

export default About;
