import AboutUs from "../../components/about/AboutUs";
import Members from "../../components/about/Members";
import SecondaryCover from "../../layouts/secondaryCover";

const About = () => {
  return (
    <div>
      <SecondaryCover
        title="About"
        description="At Auraed, we are dedicated to bridging the digital divide by empowering underprivileged children in Nepal with essential digital literacy skills. Our mission is to ensure every child, regardless of their socio-economic background, has the opportunity to thrive in an increasingly digital world."
      />
      <div className="pageAnimation">
        <AboutUs />
        <Members />
      </div>
    </div>
  );
};

export default About;
