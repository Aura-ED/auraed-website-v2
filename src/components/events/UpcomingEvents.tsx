import calenderSvg from "../../assets/calender.svg";
import linkSvg from "../../assets/link.svg";
import React from "react";
import { Event } from "../../pages/events/Events";

type UpcomingEventsProps = {
  events: Event[] | undefined;
};

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section id="blogs" className="mt-20 pageAnimation">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">Upcoming events</h2>
          <p className="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profital organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!--  Cards --> */}

        <div className="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
          {/* <!-- Event 1 --> */}
          {events?.map((event: Event, index: number) => (
            <div
              key={index}
              className="h-min-0 bg-primaryLight rounded-2xl px-4 py-4"
            >
              <div className="flex justify-between">
                <h4 className="text-xl text-primaryDark font-bold">
                  {event.name}
                </h4>

                <a href={event.id} target="_blank" rel="noreferrer">
                  <img
                    className="w-[20px] h-[20px] cursor-pointer"
                    src={linkSvg}
                    alt="link"
                  />
                </a>
              </div>

              <p className="mt-1 text-md font-semibold">{event.location}</p>

              <div className="flex mt-4 justify-start items-center space-x-2 text-sm text-dark font-semibold">
                <img
                  className="w-[14px] h-[14px]"
                  src={calenderSvg}
                  alt="calender"
                />
                <span>
                  {
                    // @ts-expect-error todate not being found
                    event.date.toDate().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
