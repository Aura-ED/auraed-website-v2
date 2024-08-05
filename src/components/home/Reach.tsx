import placesSvg from "../../assets/places.svg";
import childrenSvg from "../../assets/children.svg";
import eventsSvg from "../../assets/events.svg";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import db from "../../lib/firebase";
import CountUp from "react-countup";
import useInView from "../../hooks/useInView";

interface MetaData {
  home_page_stats: {
    districtsReached: string;
    eventsDone: string;
    helpedChildrenCount: string;
  };
}

function Reach() {
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const fetchMeta = async () => {
    try {
      const docRef = doc(db, "meta", "eY3YESNTBiBrZdJFpG10");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setMetaData(docSnap.data() as MetaData);
      } else {
        console.log("No meta such document!");
      }
    } catch (error) {
      console.error("Error fetching meta document: ", error);
    }
  };

  useEffect(() => {
    fetchMeta();
  }, []);

  const reachStats = metaData?.home_page_stats || {
    districtsReached: "0",
    eventsDone: "0",
    helpedChildrenCount: "0",
  };

  return (
    <section id="reach" className="mt-20 px-2 md:px-0">
      <div
        ref={ref}
        className="p-6 md:p-12 bg-primary rounded-2xl container mx-auto flex flex-col just items-center space-y-10 md:flex-row md:space-x-16 md:space-y-0"
      >
        {/* Reach Info */}
        <div className="text-center md:w-1/3 md:text-start md:items-start space-y-3">
          <h2 className="text-3xl font-bold text-white">Our Reach</h2>
          <p className="text-sm text-white">
            We're proud to say that Project AuraEd has successfully reached five
            schools and taught over a thousand students from different districts
            of Nepal.
          </p>
        </div>

        {/* React Catalog */}
        <div className="flex items-between space-y-10 flex-col w-full md:flex-row md:items-start md:w-2/3 md:space-y-0 justify-between md:space-x-10">
          {/* Reach 1 */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">
              {isInView && (
                <>
                  <CountUp
                    end={parseInt(reachStats.districtsReached)}
                    duration={2.5}
                  />
                  {"+"}
                </>
              )}
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <img className="w-[30px] h-[30px]" src={placesSvg} alt="places" />
              <h4 className="text-xl text-white">Districts</h4>
            </div>
          </div>

          {/* Reach 2 */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">
              {isInView && (
                <>
                  <CountUp
                    end={parseInt(reachStats.helpedChildrenCount)}
                    duration={2.5}
                  />
                  {"+"}
                </>
              )}
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <img
                className="w-[30px] h-[30px]"
                src={childrenSvg}
                alt="places"
              />
              <h4 className="text-xl text-white">Children</h4>
            </div>
          </div>

          {/* Reach 3 */}
          <div className="md:w-1/3 items-center text-center space-y-3 md:space-y-5">
            <h2 className="text-5xl font-bold text-white">
              {isInView && (
                <>
                  <CountUp
                    end={parseInt(reachStats.eventsDone)}
                    duration={2.5}
                  />
                  {"+"}
                </>
              )}
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <img className="w-[30px] h-[30px]" src={eventsSvg} alt="places" />
              <h4 className="text-xl text-white">Events</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reach;
