"use client";
import { nav } from "@/data/nav-data";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("open", open);
  }, [open]);
  return (
    <header>
      <div className="font-main text-font-default relative flex flex-col items-center justify-center pt-10 text-center">
        {/* Mobile Menu */}
        <nav
          className="absolute top-0 right-0 z-30 flex md:hidden"
          style={open ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
        >
          <Button className="mt-10 bg-white p-2" onClick={handleClose}>
            <X size={50} color="black" />
          </Button>
          <ul className="my-4 flex h-screen flex-col gap-5 bg-white text-start text-sm">
            {nav.map((item) => (
              <li className="border-b border-gray-100 p-2 px-10" key={item.id}>
                <Link href={`#${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* title */}
        <div>
          <h1 className="font-dancing-script relative flex items-center gap-3 text-4xl">
            <span>Thanh Hằng</span>
            <Heart className="text-background-default" size={28} />
            <span>Hồng Hiệp</span>
          </h1>
          <span className="relative text-xs before:absolute before:top-[9px] before:left-[-50px] before:h-px before:w-[35px] before:bg-gray-200 before:content-[''] after:absolute after:top-[9px] after:right-[-50px] after:h-px after:w-[35px] after:bg-gray-200 after:content-['']">
            Just Married
          </span>
        </div>

        <div className="sticky top-0 z-20 mt-6 flex w-full items-center justify-between gap-2 border-t border-gray-200 bg-white p-2 px-4 md:hidden">
          <Link
            href={"#Home"}
            className="text-background-default flex items-center gap-2 text-2xl"
          >
            <span>HH</span>
            <Heart size={20} />
            <span>TH</span>
          </Link>
          <Button
            onClick={handleOpen}
            variant="outline"
            className="bg-background-default"
          >
            <Menu color="white" size={20} />
          </Button>
        </div>
        {/* nav */}
        <nav className="sticky top-0 z-20 mt-6 w-full border-t border-gray-300 bg-white">
          <ul className="my-4 hidden items-center justify-center gap-5 font-black md:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
