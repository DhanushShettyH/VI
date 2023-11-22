import React from "react";

export default function Sideheader() {
  return (
    <main className="flex flex-col gap-6">
      <div
        id="hero"
        className="links active w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="about"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="planes"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="preplanes"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="mifi"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="contactus"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
      <div
        id="download"
        className="links w-[5px] h-[28px] bg-[#2f304344] rounded-lg"
      ></div>
    </main>
  );
}
