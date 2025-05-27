import Slideshow from "@/components/ui/SlideShow";
import { Heart } from "lucide-react";

const slideshowImages = [
  "/placeholder.svg?height=1080&width=1920&text=Wedding+Photo+1",
  "/placeholder.svg?height=1080&width=1920&text=Wedding+Photo+2",
  "/placeholder.svg?height=1080&width=1920&text=Wedding+Photo+3",
  "/placeholder.svg?height=1080&width=1920&text=Wedding+Photo+4",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center"
    >
      <Slideshow slide={slideshowImages} />
      <div className="z-10 flex flex-col text-center text-white">
        <h2 className="font-dancing-script relative mb-10 flex items-center gap-3 text-4xl max-sm:flex-col md:text-5xl lg:text-7xl">
          <span>Thanh Hằng</span>
          <Heart className="text-background-default" size={40} />
          <span>Hồng Hiệp</span>
        </h2>
        <div>
          <span className="relative w-auto text-xs before:absolute before:top-[6px] before:left-[-50px] before:h-px before:w-[35px] before:bg-gray-200 before:content-[''] after:absolute after:top-[6px] after:right-[-50px] after:h-px after:w-[35px] after:bg-gray-200 after:content-['']">
            09 Tháng 3 2025
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
