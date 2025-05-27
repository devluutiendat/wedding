"use client";
import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Video = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section
      id="video"
      className="w-full bg-gray-500 bg-cover bg-center bg-no-repeat py-40 text-center text-white"
      style={{ backgroundImage: "url('/placeholder.jpg')" }}
    >
      <h2 className="font-dancing-script mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Xem video cưới của chúng mình nhé ^^
      </h2>
      <p className="mb-8">Hai người, ba bữa, bốn mùa!!!</p>
      <Button
        variant="outline"
        size="lg"
        onClick={handleOpenModal}
        className="border-background-default hover:bg-background-default/85 rounded-full bg-transparent text-white"
      >
        <Play size={100} color="#fff" />
      </Button>
      {openModal && (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-300/20">
          <iframe
            className="relative h-4/5 w-4/5 border-4 border-gray-700 shadow"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 rounded-full border hover:border-white"
          >
            X
          </Button>
        </div>
      )}
    </section>
  );
};

export default Video;
