import storyImage from "../../assets/images/events/image_15.jpeg";
function AboutUs() {
  return (
    <section id="story" className="mt-20">
      <div className="container flex flex-col space-y-10 mx-auto px-2 md:flex-row md:space-y-0 md:space-x-10 md:px-0">
        {/* <!-- Story Image --> */}
        <div className="w-full md:w-1/2">
          <img
            className="mb-10 w-full h-[300px] lg:h-[350] object-cover rounded-2xl md:mb-0"
            src={storyImage}
            alt="story"
          />
        </div>
        {/* <!-- Story Content --> */}
        <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">
                The social value we deliver
              </h2>
              <h2 className="text-3xl text-primaryDark font-bold">
                Impacting by doing
              </h2>
            </div>
            <p className="text-sm text-dark">
              In an ever-evolving computerized world, the control of innovation
              in forming youthful minds cannot be downplayed. Enter AuraEd, a
              spearheading NGO devoted to revolutionizing child instruction
              through imaginative tech arrangements. Their mission goes past
              conventional educating strategies, grasping the computerized age
              to supply children with the skills and knowledge they have to be
              flourish in a advanced world.
            </p>
            <p className="text-sm text-dark">
              AuraEd envisions a future where each child, in any case of their
              socio-economic foundation, has get to to quality instruction
              improved with innovation. The organization accepts that innovation
              can bridge the instructive divide, offering intuitively, locks in,
              and personalized learning encounters that conventional strategies
              frequently fall flat to supply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
