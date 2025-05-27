import WishesForm from "../ui/WishForm";
import WishesList from "../ui/WishesList";
import Image from "next/image";
const Wisher = () => {
  return (
    <section
      id="wishes"
      className="w-full px-16 py-16"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <Image
            src={"/couple/sec-title-flower.png"}
            alt={"sec-title"}
            width={150}
            height={150}
          />

          <h2 className="font-dancing-script m-4 text-4xl font-black">
            Sổ Lưu Bút
          </h2>
          <p className="mx-auto max-w-2xl">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng mình
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <WishesForm />
          <WishesList />
        </div>
      </div>
    </section>
  );
};

export default Wisher;
