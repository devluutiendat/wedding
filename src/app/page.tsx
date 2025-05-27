import Hero from "@/components/section/Hero";
import Invitation from "@/components/section/Invitation";
import Couple from "@/components/section/Couple";
import Video from "@/components/section/Video";
import LoveStory from "@/components/section/StoryTimeLine";
import Event from "@/components/section/Event";
import PhotoGallery from "@/components/section/PhotoGallery";
import Wisher from "@/components/section/Wisher";
import GiftSection from "@/components/section/Gift";

export default function Home() {
  return (
    <main className="font-main">
      <Hero />
      <Invitation />
      <Couple />
      <Video />
      <LoveStory />
      <Event />
      <PhotoGallery />
      <Wisher />
      <GiftSection />
    </main>
  );
}
