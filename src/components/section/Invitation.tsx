import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const Invitation = () => {
  // Set the date for the wedding
  const date = new Date("2025-03-09");

  const dayOfWeek = date.getDay();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const totalDaysInMonth = new Date(year, month, 0).getDate();
  return (
    <section
      id="countdown"
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

          <Card className="relative z-10 bg-white p-16 shadow-md">
            <CardContent className="border-background-default h-full border-4 p-8">
              <div className="mb-6 text-center">
                <h2 className="text-lg font-medium tracking-wide text-gray-900">
                  MARCH / 2025
                </h2>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-1 border-y border-gray-200 pb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="flex h-10 items-center justify-center text-sm font-medium text-gray-600"
                    >
                      {day}
                    </div>
                  ),
                )}
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
        </div>
      </div>
    </section>
  );
};

export default Invitation;
