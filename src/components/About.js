/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function About() {
  const items = [
    {
      src: "./plan_upgrade.svg",
      title: "Plan Upgrade",
    },
    {
      src: "redx.svg",
      title: "REDX",
    },
    {
      src: "hero.svg",
      title: "Explore Hero Unlimited",
    },
    {
      src: "mifi.svg",
      title: "Buy Vi Mifi",
    },
    {
      src: "p2p.svg",
      title: "Prepaid to Postpaid",
    },
    {
      src: "help&support.svg",
      title: "help & support",
    },
  ];
  return (
    <section className=" h-screen w-full flex flex-col sapce-y-8 justify-center items-center text-center overflow-hidden space-y-10">
      <h1 className=" text-3xl font-bold">there's always more with Vi</h1>
      <img
        src="Sony-LIV-master-chefdesktop-service.webp"
        alt="image 1"
        className=" h-80 max-w-[780px] rounded-lg object-contain "
      />
      <div className="flex flex-row space-x-4">
        {items.map((item, i) => (
          <div
            key={i}
            className=" flex flex-col bg-[#fdf6ec] border border-[#e600003c] rounded-2xl w-[103px] h-[113px] items-center justify-center"
          >
            <img src={item.src} alt={i} />
            <p className=" text-[13px] px-3 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
