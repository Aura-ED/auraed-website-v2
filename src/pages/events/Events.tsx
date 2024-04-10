import UpcomingEvents from "../../components/events/UpcomingEvents";
import SecondaryCover from "../../layouts/secondaryCover";

import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../lib/firebase";

export interface Event {
  location: string;
  tags: string[];
  date: Date;
  name: string;
  id: string;
}

export interface Date {
  seconds: number;
  nanoseconds: number;
}

// const events: Event[] = [
//   {
//     title: "Event 1",
//     url: "https://www.google.com",
//     location: "Location 1",
//     startDate: "2022-10-10",
//     endDate: "2022-10-12",
//   },
//   {
//     title: "Event 2",
//     url: "https://www.google.com",
//     location: "Location 2",
//     startDate: "2022-10-10",
//     endDate: "2022-10-12",
//   },
//   {
//     title: "Event 3",
//     url: "https://www.google.com",
//     location: "Location 3",
//     startDate: "2022-10-10",
//     endDate: "2022-10-12",
//   },
// ];

function Events() {
  const [events, setEvents] = useState<Event[]>();

  const fetchPost = async () => {
    await getDocs(collection(db, "event")).then((querySnapshot) => {
      const newData: Event[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        location: doc.data().location,
        tags: doc.data().tags,
        date: doc.data().date,
        name: doc.data().name,
      }));
      console.log(newData);
      setEvents(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="">
      <SecondaryCover
        title="Events"
        description="We are a non-profital organization focusing on child education with technology."
      />
      <UpcomingEvents events={events} />
    </div>
  );
}

export default Events;
