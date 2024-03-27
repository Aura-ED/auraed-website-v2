import Programs from "../../components/home/Programs.tsx";
import Reach from "../../components/home/Reach.tsx";
import Story from "../../components/home/Story.tsx";
import SwiperComp from "../../components/home/Swiper.tsx";

const Home = () => {
  return (
    <div className="pageAnimation">
      <SwiperComp />
      <div className="story p-4">
        <Programs />
        <Reach />
        <Story />
      </div>
    </div>
  );
};

export default Home;
