import Image from "next/image";
const Footer = () => {
  return (
    <footer
      className="text-font-default flex items-center justify-center bg-no-repeat p-20 text-center"
      style={{
        backgroundImage: "url('/footer-shape.png')",
      }}
    >
      <div>
        <div
          style={{
            backgroundImage: "url('/footer-couple-pic-frame.png')",
          }}
          className="relative h-[270px] w-[300px] bg-cover sm:h-[450px] sm:w-[500px]"
        >
          <Image
            src={"/default.jpg"}
            alt="Hồng Hiệp & Thanh Hằng Wedding site!"
            width={500}
            height={450}
            className="absolute top-[5%] left-[11%] max-w-3/4 transform rounded-full"
          />
        </div>
        <h2 className="font-dancing-script my-4 text-5xl sm:text-7xl">
          Thank you!
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
