"use client";
import { events } from "@/data/event-data";
import dynamic from "next/dynamic";

const EventCard = dynamic(
  () => import("../ui/EventsCard").then((mod) => mod.default),
  { ssr: false },
);
export default function Event() {
  return (
    <section
      id="events"
      className="w-full py-16"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-dancing-script mb-4 text-5xl font-bold">
            Sự Kiện Cưới
          </h2>
          <p className="">
            ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm
            chằm về cùng một hướng...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              mapUrl={event.mapUrl}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
