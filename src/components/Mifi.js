import React from "react";
import { Button } from "@material-tailwind/react";

export default function Mifi() {
  const itmes = [
    {
      img: "./data-1.svg",
      title: "High-Speed \nData upto \n150Mbps",
      border: "border-r-2 border-gray-500 border-dashed",
    },
    {
      img: "./connected-devices.svg",
      title: "connect upto \n10 devices",
      border: "border-r-2 border-gray-500 border-dashed ",
    },
    {
      img: "./battery-1.svg",
      title: "6 hours of \nbattery life",
      border: " border-r-2 border-gray-500 border-dashed ",
    },
    {
      img: "./warranty-1.svg",
      title: "1 year \nwarranty",
      border: "border-none",
    },
  ];
  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden ">
      <div className=" h-[450px] mt-16">
        <img src="./vi-mifi.webp" className=" h-full" alt="" />
      </div>
      <div className="flex flex-row gap-16 items-center justify-center">
        {itmes.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center space-y-3 pr-16 ${item.border}`}
          >
            <img src={item.img} alt={i} />
            <pre>{item.title}</pre>
          </div>
        ))}
      </div>
      <Button
        variant="gradient"
        color="red"
        className=" w-[280px] h-12 rounded-full bg-[#e60000] mt-5"
      >
        Buy now
      </Button>
    </section>
  );
}
