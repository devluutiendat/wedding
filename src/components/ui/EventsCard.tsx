"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { EventItem } from "../../types/event-type";
import Link from "next/link";

export default function EventCard({
  title,
  date,
  time,
  location,
  mapUrl,
  image,
}: EventItem) {
  return (
    <Card className="overflow-hidden bg-white text-center text-gray-900">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title || "Event Image"}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-col items-center space-y-2 px-10 py-6 text-center">
        <p className="font-semibold">
          {time + " - "}
          {date}
        </p>
        <p className="text-sm leading-8">{location}</p>
        <AddToCalendarButton
          name="Wedding Event"
          location="World Wide Web"
          startDate="2025-05-28"
          endDate="2025-05-28"
          startTime="10:15"
          endTime="23:30"
          trigger="click"
          buttonStyle="round"
          size="8"
          listStyle="overlay"
          timeZone="America/Los_Angeles"
          label="thêm vào lịch"
          description="This is a sample event description."
        ></AddToCalendarButton>
        <Link
          href={mapUrl}
          target="_blank"
          className="rounded-full border-2 border-gray-100 bg-gray-100 px-12 py-3 font-black shadow-lg hover:bg-white"
        >
          Xem bản đồ
        </Link>
      </CardContent>
    </Card>
  );
}
