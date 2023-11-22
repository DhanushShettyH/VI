/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Card,
  Typography,
  Input,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className=" h-screen w-full flex flex-col sapce-y-8 justify-center items-center text-center overflow-hidden space-y-5">
      <img
        src="Desktop_max_VIONE.webp"
        alt="image 1"
        className="h-96 max-w-[1000px] rounded-lg object-contain "
      />

      <div className=" flex flex-row justify-between max-w-[1000px] w-full ">
        <Card className=" w-[500px] h-[220px] ">
          <CardBody className=" flex flex-col text-start space-y-5">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-[30px] tracking-[-1px]"
            >
              reacharge <br />
              and pay bill
            </Typography>{" "}
            <div className="relative flex w-full max-w-[27rem] ">
              <Input
                type="email"
                label="Email Address"
                className="pr-20"
                containerProps={{
                  className: "min-w-0 ",
                }}
              />
              <Button
                size="sm"
                color={"gray"}
                className="absolute right-1 top-1 rounded"
              >
                <ChevronRightIcon
                  strokeWidth={5}
                  className={`h-4 w-4 transition-transform lg:block `}
                />
              </Button>
            </div>
          </CardBody>
        </Card>
        <div className="flex flex-col text-left space-y-2">
          <h4 className=" font-bold text-2xl">new to Vi?</h4>
          <p>get Vi SIM delivered free</p>
          <div className="flex flex-row space-x-4">
            <div className=" flex flex-col bg-[#fdf6ec] border border-[#e600003c] rounded-2xl w-[103px] h-[113px] items-center justify-center">
              <img src="./prepaid-1.svg" alt="1" />
              <p className=" text-[13px] px-3 text-center">buy prepaid sim</p>
            </div>
            <div className=" flex flex-col bg-[#fdf6ec] border border-[#e600003c] rounded-2xl w-[103px] h-[113px] items-center justify-center">
              <img src="./postpaid-2.svg" alt="2" />
              <p className=" text-[13px] px-3 text-center">buy postpaid sim</p>
            </div>
            <div className=" flex flex-col bg-[#fdf6ec] border border-[#e600003c] rounded-2xl w-[103px] h-[113px] items-center justify-center">
              <img src="./port-to-vi.svg" alt="3" />
              <p className=" text-[13px] px-3 text-center">port to vi</p>
            </div>
            <div className=" flex flex-col bg-[#fdf6ec] border border-[#e600003c] rounded-2xl w-[103px] h-[113px] items-center justify-center">
              <img src="./buy-fancy-num.svg" alt="4" />
              <p className=" text-[13px] px-3 text-center">buy fancy number</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
