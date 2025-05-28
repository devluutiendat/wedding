"use client";
import CalendarCard from "../ui/CalendarCard";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const Invitation = () => {
  const date = new Date("2025-03-09");

  return (
    <section
      id="invitation"
      className="w-full overflow-hidden bg-center bg-repeat py-32"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="relative z-10 bg-white p-16 shadow-md">
            <div
              className="absolute top-[-100px] left-[-150px] z-[-1] hidden h-[414px] w-[220px] bg-cover bg-center md:block"
              style={{
                backgroundImage: "url('/invitation-left-img.png')",
              }}
            ></div>
            <CardContent className="border-background-default h-full border-4 p-8">
              <h2 className="mb- font-great-vibes text-font-default my-8 text-center text-5xl">
                Save the Date
              </h2>
              <p className="text-center text-gray-600">For the wedding of</p>
              <h3 className="text-font-default mt-2 mb-6 text-center text-2xl font-black">
                Hồng Hiệp & Thanh Hằng
              </h3>
              <p className="mb-8 text-center text-lg text-gray-800">
                Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
                có thêm một niềm hạnh phúc!
              </p>
              <div className="mb-12 flex justify-center">
                <Link
                  href={"#wishes"}
                  className="bg-background-default p-4 text-lg font-bold text-white"
                >
                  Gửi lời chúc &rarr;
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Right side calendar card */}
          <CalendarCard WeddingDate={date} />
        </div>
      </div>
    </section>
  );
};

export default Invitation;
