import React from "react";
import { Card, Button } from "@material-tailwind/react";
export default function Prepaidplanes() {
  const cards = [
    {
      amount: 299,
      call: `Truly Unlimited Calls`,
      gb: `1.5GB/Day`,
      msg: `100 sms/Day`,
      mobile: "28 Days",
      offer: null,
    },
    {
      amount: 479,
      call: `Truly Unlimited Calls`,
      gb: `1.5GB/Day`,
      msg: `100 sms/Day`,
      mobile: "56 Days",
      offer: null,
    },
    {
      plane: "Vi Max 501",
      amount: 719,
      call: `Truly Unlimited Calls`,
      gb: `1.5GB/Day`,
      msg: `100 sms/Day`,
      mobile: "28 Days",
      offer: "Only On Vi App-Extra 5GB Data Free",
    },
  ];

  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden space-y-5 bg-[#fbf1e3]">
      <h1 className=" mt-5 text-[34px] font-bold ">best prepaid plans</h1>
      <div className=" flex flex-row space-x-7">
        {cards.map((card, i) => {
          return (
            <div className=" relative" key={i}>
              <div
                className={`${
                  card.offer !== null ? "flex" : "hidden"
                } absolute bg-[#ffcc1b] rounded-xl w-[250px] p-1 h-10 text-[13px] font-bold `}
              >
                <h1>{card.offer}</h1>
              </div>
              <Card
                className={` mt-6 w-[316px] h-[400px] text-left py-5  space-y-3 p-6 overflow-hidden`}
                key={i}
              >
                <img
                  src="./hero-unlimited.svg"
                  alt="1"
                  className=" absolute top-0 right-0"
                />
                <div className=" w-full border-b-2 border-dashed border-[#8f909e69] pr-5 space-y-3 text-[30px] font-bold text-black">
                  &#8377;{card.amount}
                  <br />
                </div>

                <div className=" w-[315px] h-[200px] overflow-y-auto text-[15px] space-y-3 scrollbar scrollbar-thumb-blue-gray-700 scrollbar-track-white scrollbar-thumb-rounded-2xl scrollbar-w-1">
                  <div className="pt-3 pr-5 flex flex-col space-y-4 font-bold">
                    <div className="flex flex-row gap-4">
                      <img src="./Icon_Call.svg" alt="1" />
                      {card.call}
                    </div>

                    <div className="flex flex-row gap-4">
                      <img src="./Icon_Data.svg" alt="1" />
                      {card.gb}
                    </div>
                    <div className="flex flex-row gap-4">
                      <img src="./Icon_SMS.svg" alt="1" />
                      {card.msg}
                    </div>
                    <div className="flex flex-row gap-4">
                      <img src="./Icon_Postpaid.svg" alt="1" />
                      {card.mobile}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <Button
                    variant="gradient"
                    color="red"
                    className=" w-[265px] rounded-2xl bg-[#e60000]"
                  >
                    Buy now
                  </Button>

                  <a href="" className=" underline">
                    more details
                  </a>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <Button variant="outlined" className=" w-[300px] rounded-full">
        View All Planes
      </Button>
    </section>
  );
}
