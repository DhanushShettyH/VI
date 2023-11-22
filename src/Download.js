import React from "react";

export default function Download() {
  return (
    <section className=" h-screen w-full flex flex-row gap-10 justify-center items-center text-center overflow-hidden mx-auto ">
      <div className="text-left space-y-4 text-black  pr-10">
        <h1 className=" text-[30px] font-bold ">experience all new Vi App</h1>
        <p>
          Download the App for exclusive offers, manage your <br />
          account and much more, on-the-go.
        </p>
        <img src="./qr-code.svg" alt="1" />
        <p className=" font-bold">Scan QR code to download the Vi app</p>
      </div>
      <div className="flex justify-center items-center ">
        <img src="./phone-mockup.svg" alt="1" />
      </div>
    </section>
  );
}
