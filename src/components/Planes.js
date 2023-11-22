import React from "react";
import { Card, Button, Avatar } from "@material-tailwind/react";
export default function Planes() {
  const cards = [
    {
      plane: "Vi Max 501",
      amount: 501,
      call: `Unlimited Calls\n Local,STD,National Roaming`,
      gb: `90GB (Unlimited 12 AM to 6AM)  200GB roll over`,
      msg: `3000 SMS/Month Local,STD,National Roaming`,
      choose: "Choose any 2 free from below",
      avatar: ["./hungamamusic.svg", "./vimovies&tv.svg", "./vigames.svg"],
      bgcolor: "white",
    },
    {
      plane: "Vi Max 701",
      amount: 701,
      call: `Unlimited Calls  Local,STD,National Roaming`,
      gb: `Unlimited Data`,
      msg: `3000 SMS/Month Local,STD,National Roaming`,
      choose: "Choose any 3 free from below",
      avatar: ["./hungamamusic.svg", "./vimovies&tv.svg", "./vigames.svg"],
      bgcolor: "white",
    },
    {
      plane: "RED X 1101",
      amount: 1101,
      call: `Unlimited Calls  Local,STD,National Roaming`,
      gb: `90GB (Unlimited 12 AM to 6AM)  200GB roll over`,
      msg: `3000 SMS/Month Local,STD,National Roaming`,
      choose: "fully loaded with benefits",
      avatar: [
        "./makemytriphotel.svg",
        "./makemytripflight.svg",
        "./internationalroaming.svg",
        "./airportloungeaccess.svg",
      ],
      bgcolor: "black",
    },
  ];

  const applications = [
    {
      img: "./amazonprime.svg",
      name: "Amazon Prime",
      description:
        "6 months Amazon Prime trial (free only once then on paid auto-renewal)",
    },
    {
      img: "./disney+hotstar.svg",
      name: "Disney+ Hotstar",
      description: "1 year of Disney+ Hotstar mobile Subscription",
    },
    {
      img: "sonyliv.svg",
      name: "Sony LIV",
      description: "12 months of Sony LIV mobile Subscription",
    },
    {
      img: "sunnxt.svg",
      name: "Sun NXT",
      description: "1 year ofSun NXT preminum (TV+Mobile) subscription",
    },
    {
      img: "eazydiner.svg",
      name: "EazyDiner",
      description:
        "1 year access to two coupons of EazyDiner Prime quaterly membership",
    },
    {
      img: "easemytrip.svg",
      name: "EaseMy Trip",
      description:
        "1 year access to flat Rs750 OFF every month on booking return filghts via EaseMy Trip",
    },
    {
      img: "norton.svg",
      name: "Norton",
      description: "1 year Norton 360 Mobile Security cover at no extra cost",
    },
  ];

  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden space-y-5">
      <h1 className=" mt-5 text-[34px] font-bold ">best postpaid plans</h1>
      <div className="flex flex-row space-x-5">
        <h2 className=" font-bold border-b-4 border-[#e60000]">
          Individual Plans
        </h2>
        <p>Family plans</p>
      </div>
      <div className=" flex flex-row space-x-7">
        {cards.map((card, i) => {
          let color = "bg-" + card.bgcolor;
          return (
            <div className=" relative" key={i}>
              <div ClassName=" absolute h-[50px]  top-[-5px] w-[104px] rounded-l-lg pt-1 pl-1 bg-[#ffc600] text-[14px] font-bold">
                {card.choose.slice(0, 13)}
              </div>
              <div ClassName=" absolute left-[33%] top-[-5px] h-0 w-0 border-l-[20px] border-b-[30px] rounded-r-md border-solid border-t-transparent border-b-transparent border-l-[#ffc600]"></div>

              <Card
                color={card.bgcolor}
                className={` mt-6 w-[316px] h-[400px] text-left py-5  space-y-3 rounded-t-none ${color} ${
                  card.bgcolor === "black" ? "text-white" : "text-black"
                }`}
                key={i}
              >
                <div className=" w-full border-b-2 border-[#8f909ed5] pl-5 pr-5 space-y-3">
                  {card.plane}
                  <br />
                  &#8377;{card.amount}/month
                  <br />
                </div>

                <div className=" w-[315px] h-[300px] overflow-y-auto text-[15px] space-y-3 scrollbar scrollbar-thumb-blue-gray-700 scrollbar-track-white scrollbar-thumb-rounded-2xl scrollbar-w-1">
                  <div className="pl-5 pr-5 flex flex-col">
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
                  </div>
                  <div className="flex items-center -space-x-4 pl-5">
                    {card.avatar.map((ava, i) => (
                      <Avatar
                        key={i}
                        variant="circular"
                        alt="user 1"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src={ava}
                      />
                    ))}
                  </div>

                  <div
                    className={` text-[12px] pl-5 pr-5 py-3 
				  ${card.bgcolor === "black" ? "bg-[#2f3043]" : "bg-[#fdf6ec]"}
				  ${card.bgcolor === "black" ? "text-white" : "text-black"}`}
                  >
                    {card.choose}
                    {applications.map((app, i) => (
                      <div
                        key={i}
                        className="flex flex-row space-y-2 space-x-3"
                      >
                        <img src={app.img} alt={i} />
                        <div>
                          <h3 className=" text-[13px] font-bold">{app.name}</h3>
                          <p>{app.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-0 absolute bottom-0 h-[80px] w-[316px] flex items-center justify-center rounded-xl  ${
                    card.bgcolor === "black"
                      ? "bg-[#0000009a]"
                      : "bg-[#ffffff76]"
                  }`}
                >
                  <Button
                    variant="gradient"
                    color="red"
                    className=" w-[280px] rounded-2xl bg-[#e60000]"
                  >
                    proceed with &#8377;{card.amount} plan
                  </Button>
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
