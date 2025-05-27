"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample gallery images
const galleryImages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/footer/couple.jpg`,
  alt: `Wedding photo ${i + 1}`,
}));

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      (selectedImage - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Album Hình Cưới</h2>
          <p className="mx-auto max-w-2xl">
            "Những bức ảnh mở ra cánh cửa bước vào quá khứ, nhưng cũng cho phép
            ta hướng về tương lai". Hãy đến sớm một chút để chụp chung hình với
            vợ chồng mình nhé. Chúng mình rất muốn ngắm nhìn lại những khoảnh
            khắc tuyệt vời trong ngày lễ trọng đại này.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.slice(0, 8).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle
            onClick={() => openLightbox(0)}
            className="bg-background-default hover:bg-background-hover m-8 flex items-center gap-2 rounded-full p-4 text-white"
          >
            {" "}
            Tất cả hình ảnh
          </DialogTitle>
        </DialogHeader>
        <DialogContent className="max-w-5xl border-none bg-black/90 p-0">
          <div className="relative h-[80vh]">
            {selectedImage !== null && (
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
