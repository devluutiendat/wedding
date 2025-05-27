import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { couple } from "@/data/couple-data";

const Couple = () => {
  return (
    <section id="couple" className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src={"/title-flower.png"}
              alt={"sec-title"}
              width={150}
              height={150}
            />
          </div>
          <h3 className="text-font-default font-dancing-script mb-4 text-3xl font-extrabold">
            Cô dâu & Chú rể
          </h3>
          <p className="mx-auto max-w-2xl">
            Thầy dạy Văn, cô dạy Toán,
            <br />
            Chữ và số, nhưng tình chẳng phai.
            <br />
            Cô tính toán từng con số nhỏ,
            <br />
            Thầy vẽ thơ, tình yêu vẹn nguyên dài.
            <br />
            Con số, chữ nghĩa hai thế giới,
            <br />
            Nhưng trái tim chung một nhịp đập.
            <br />
            Cùng trao cho học trò niềm vui,
            <br />
            Từ những con số đến những vần thơ.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {couple.map((person, index) => (
            <Card
              key={index}
              className="gap-0 overflow-hidden rounded-none border-0 p-0"
            >
              <CardContent className="grid grid-cols-1 p-0 md:grid-cols-2">
                <div
                  className={`relative aspect-square ${index % 2 === 0 ? "" : "order-last"}`}
                >
                  <Image
                    src={person.image}
                    alt={person.fullname}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-gray-400 px-12 py-16">
                  <h3 className="font-dancing-script text-font-default mb-4 text-4xl">
                    {person.fullname}
                  </h3>
                  <div className="mb-4">
                    <div>
                      Con của bố:{" "}
                      <span className="text-font-default text-lg font-extrabold">
                        {person.dad}
                      </span>
                    </div>
                    <div>
                      Con của mẹ:{" "}
                      <span className="text-font-default text-lg font-extrabold">
                        {person.mom}
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed">{person.describe}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Couple;
