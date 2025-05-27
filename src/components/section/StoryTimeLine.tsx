import Image from "next/image";
import { stories } from "@/data/stories-data";
const LoveStory = () => {
  return (
    <section className="container mx-auto bg-white py-16 md:px-12" id="story">
      <div className="mb-12 flex w-full flex-col items-center text-center">
        <Image
          src={"/title-flower.png"}
          alt={"sec-title"}
          width={150}
          height={150}
        />

        <h2 className="text-font-default font-dancing-script my-2 mb-4 text-2xl font-bold">
          Chuyện tình yêu
        </h2>
        <p className="max-w-2xl text-lg text-gray-600">
          Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả
          một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
        </p>
      </div>

      <div className="bg-white px-4 py-10 shadow-md">
        <ul className="relative list-none">
          {/* Timeline line */}
          <div className="bg-background-default absolute top-0 left-1/2 -ml-[1.5px] hidden h-full w-0.5 sm:block"></div>
          {/* Timeline start dot */}
          <div className="bg-background-default absolute top-0 left-1/2 -ml-2.5 hidden h-5 w-5 rounded-full sm:block"></div>

          {stories.map((story, index) => (
            <li
              key={story.id}
              className="last:pb-0npm i add-to-calendar-button border-background-default relative mb-10 border-dashed pb-10 last:border-0 max-md:border-b-2"
            >
              {/* Timeline dot */}
              <div
                className={`border-background-default after:border-background-default absolute bottom-0 left-1/2 -ml-2.5 hidden h-5 w-5 rounded-full border-2 bg-white after:absolute after:top-1/3 after:h-1 after:w-32 after:border-b-2 after:border-dashed after:content-[''] sm:block ${
                  (index + 1) % 2 === 0 ? "after:-left-32" : "after:-right-32"
                } ${index + 1 === stories.length ? "after:hidden" : ""} `}
              ></div>

              <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2">
                <div
                  className={`px-10 text-center ${
                    (index + 1) % 2 === 0 ? "sm:order-1" : " "
                  } ${(index + 1) % 2 === 0 ? "sm:text-left" : "sm:text-right"} `}
                >
                  <h3 className="text-font-default mb-2 text-2xl">
                    {story.title}
                  </h3>
                  <span className="text-background-default mb-4 block">
                    {story.date}
                  </span>
                  <p className="mb-6 text-gray-700 sm:mb-0">{story.content}</p>
                </div>
                <Image
                  width={300}
                  height={300}
                  src={"/footer/couple.jpg"}
                  alt={story.title}
                  className="rounded-lg object-contain px-6"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LoveStory;
