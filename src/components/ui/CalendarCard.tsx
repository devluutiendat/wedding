import React from "react";
import { Card, CardContent } from "./card";
type CalendarCardProps = {
  WeddingDate: Date;
};
const CalendarCard = ({ WeddingDate }: CalendarCardProps) => {
  const dayOfWeek = WeddingDate.getDay();
  const day = WeddingDate.getDate();
  const year = WeddingDate.getFullYear();
  const month = WeddingDate.getMonth() + 1;
  const totalDaysInMonth = new Date(year, month, 0).getDate();

  return (
    <Card className="relative z-10 bg-white p-16 shadow-md">
      <CardContent className="border-background-default h-full border-4 p-8">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-medium tracking-wide text-gray-900">
            MARCH / 2025
          </h2>
        </div>

        <div className="mb-2 grid grid-cols-7 gap-1 border-y border-gray-200 pb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="flex h-10 items-center justify-center text-sm font-medium text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from(
            dayOfWeek == 0 ? { length: 6 } : { length: dayOfWeek },
            (_, i) => (
              <div
                key={i}
                className="flex h-10 items-center justify-center text-sm text-gray-400"
              ></div>
            ),
          )}
          {Array.from({ length: totalDaysInMonth }, (_, i) => (
            <div
              key={i + 1}
              className={`flex h-10 items-center justify-center ${
                i + 1 === day
                  ? "bg-background-default rounded-full text-white"
                  : "text-gray-700"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <div
        className="absolute right-[-120px] bottom-[-100px] z-[-1] hidden h-[508px] w-[400px] bg-cover bg-center md:block"
        style={{
          backgroundImage: "url('/invitation-right-image.png')",
        }}
      ></div>
    </Card>
  );
};

export default CalendarCard;
