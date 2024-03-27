import UpcomingEvents from "../../components/events/UpcomingEvents";
import SecondaryCover from "../../layouts/secondaryCover";

type Event = {
  title: string;
  url: string;
  location: string;
  startDate: string;
  endDate: string;
};

const events: Event[] = [
  {
    title: "Event 1",
    url: "https://www.google.com",
    location: "Location 1",
    startDate: "2022-10-10",
    endDate: "2022-10-12",
  },
  {
    title: "Event 2",
    url: "https://www.google.com",
    location: "Location 2",
    startDate: "2022-10-10",
    endDate: "2022-10-12",
  },
  {
    title: "Event 3",
    url: "https://www.google.com",
    location: "Location 3",
    startDate: "2022-10-10",
    endDate: "2022-10-12",
  },
];

function Events() {
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
