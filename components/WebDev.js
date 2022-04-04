import React from "react";
import Image from "next/image";

const WebDev = () => {
  return (
    <div className="p-5  space-y-10">
      <div className="w-full h-auto flex flex-col items-center text-center border-2 border-gray-500 rounded-3xl p-3 space-y-10">
        <Image src={"/frontend.svg"} height="50px" width="50px" />
        <p className=" text-2xl font-semibold text-blue-600">
          Front-end Developer
        </p>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <div className="space-y-5">
          <p className="text-xl font-semibold text-cyan-500">
            Languages I speak:
          </p>
          <p>HTML, CSS ,ReactJs ,NextJs ,JavaScript, NodeJs</p>
        </div>
        <div className="space-y-5">
          <p className="text-xl font-semibold text-cyan-500">Dev Tools:</p>
          <p>VScode</p>
          <p>NPM</p>
          <p>YARN</p>
          <p>Github</p>
          <p>Terminal</p>
          <p>MUI</p>
          <p>Bootstrap</p>
          <p>TailwindCSS</p>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
