import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { Margarine } from "next/font/google";
import Image from "next/image";
import React from "react";

const team = () => {
  return (
    <div className="ml-8 mt-5 flex-col justify-between gap-5">
      <div className="flex justify-evenly gap-5">
        <div
          className="flex items-center mb-5 p-2" 
          style={{ background: "#FFFFFF33", width: "40vw", height: "30vh" }}
        >
          <div
            className="rounded-full bg-slate-50 flex items-center justify-center"
            style={{ background: "#FFFFFF33", width: "80px", height: "80px" }}
          >
            Image
          </div>
        </div>
        <div
          className="flex items-center mb-5 p-2"
          style={{ background: "#FFFFFF33", width: "40vw", height: "30vh" }}
        >
          <div
            className="rounded-full bg-slate-50 flex items-center justify-center"
            style={{ background: "#FFFFFF33", width: "80px", height: "80px" }}
          >
            Image
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-5">
        <div
          className="flex items-center mb-5 p-2"
          style={{ background: "#FFFFFF33", width: "40vw", height: "30vh" }}
        >
          <div
            className="rounded-full bg-slate-50 flex items-center justify-center"
            style={{ background: "#FFFFFF33", width: "80px", height: "80px" }}
          >
            Image
          </div>
        </div>
        <div
          className="flex items-center mb-5 p-2"
          style={{ background: "#FFFFFF33", width: "40vw", height: "30vh" }}
        >
          <div
            className="rounded-full bg-slate-50 flex items-center justify-center"
            style={{ background: "#FFFFFF33", width: "80px", height: "80px" }}
          >
            Image
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
