import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function ContactUs() {
  return (
    <section className=" h-screen w-full flex flex-row gap-10 justify-center items-center text-center overflow-hidden ">
      <div>
        <Card className="mt-6 w-[634px] h-[516px] bg-[#f9e8d0] text-black p-5 space-y-3">
          <CardBody>
            <div className="w-full flex items-end justify-end">
              <img src="./vic.svg" alt="" className=" pr-8" />
            </div>
            <div className=" h-[300px] flex flex-col gap-3 justify-end items-start">
              <h2 className="text-[35px] font-bold ">Let Vic help you</h2>
              <p className="text-left text-[18px]">
                Vic, your personal Vi assistant <br /> is here to help you
              </p>
              <h3 className="text-[20px] font-bold">chat with Vic on</h3>
              <div className="flex flex-row gap-7">
                <Card className="w-[100px] h-[96px] flex flex-col items-center justify-center space-y-1">
                  <img src="./whatsapp-svgrepo-com-1.svg" alt="1" />
                  <p>WhatsApp</p>
                </Card>
                <Card className="w-[100px] h-[96px]  flex flex-col items-center justify-center space-y-1">
                  <img src="./Icon_Mobile-1.svg" alt="1" />
                  <p>Vi App</p>
                </Card>
                <Card className="w-[100px] h-[96px]  flex flex-col items-center justify-center space-y-1">
                  <img src="./Icon_Globe_1.svg" alt="1" />
                  <p>Website</p>
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col gap-16">
        <Card className="mt-6 w-[365px] h-[241px] bg-[#dfebfb] text-left p-5 space-y-5 text-black">
          <CardBody>
            <div>
              <div className="flex justify-end">
                <img src="./faq.svg" alt="" className=" pr-5" />
              </div>

              <div>
                <h2 className=" font-bold ">FAQS</h2>
                <p>
                  Here are frequently asked
                  <br /> questions. Might help you as well.
                </p>
              </div>
              <div className="flex gap-3 mt-5">
                View FAQS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6  w-[365px] h-[241px] p-5 text-left text-black bg-[#ffbbac] ">
          <CardBody className="space-y-3 ">
            <div className="flex flex-row justify-between font-bold">
              <h2>
                join the <br />
                conversation
              </h2>
              <img src="./follow-on-social.svg" alt="" />
            </div>
            <div className="flex flex-col space-y-4">
              <h1>
                keep in touch with us on our
                <br /> social channels
              </h1>
              <div className="flex flex-row gap-5">
                <Card className="w-[40px] h-[40px] flex items-center justify-center">
                  <img src="./facebook.svg" alt="1" />
                </Card>
                <Card className="w-[40px] h-[40px] flex items-center justify-center">
                  <img src="./instagram.svg" alt="1" />
                </Card>
                <Card className="w-[40px] h-[40px] flex items-center justify-center">
                  <img src="./twitter.svg" alt="1" />
                </Card>
                <Card className="w-[40px] h-[40px] flex items-center justify-center">
                  <img src="./YOUTUBE_ICON.svg" alt="1" />
                </Card>
                <Card className="w-[40px] h-[40px] flex items-center justify-center">
                  <img src="./linkedin.svg" alt="1" />
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
