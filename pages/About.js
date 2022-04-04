import React from "react";
import Image from "next/image";
import WebDev from "../components/WebDev";
import Cyber from "../components/Cyber";

const About = () => {
  return (
    <div className="h-auto w-screen text-white bg-black flex flex-col items-center transition-all p-5  space-y-10">
      <div className="w-full h-auto space-y-10">
        <p className="text-xl font-bold text-center">
          Hi, I’m <span className="text-red-600">Akshay</span> . Nice to meet
          you. 🤩{" "}
        </p>

        <div className="space-y-5 w-full flex flex-col items-center">
          <p className="text-lg text-center">
            As a <span className="text-blue-600">Web Developer</span>{" "}
          </p>
          <p className="text-center w-3/4">
            Since beginning my journey as a freelance developer nearly 1 year
            ago, I've developed beautiful and responsive website as a hobby and
            for my clients. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ">
        <div>
          <WebDev />
        </div>
        <div>
          <Cyber />
        </div>
      </div>
    </div>
  );
};

export default About;
