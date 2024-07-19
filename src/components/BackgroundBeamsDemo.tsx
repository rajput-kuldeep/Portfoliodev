"use client";

import { BackgroundBeams } from "./ui/background-beams/background-beams";
import {useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import ProjectCard from "./Home/ProjectCard";


export function BackgroundBeamsDemo() {
    const h1 = useRef(null)
    const para = useRef(null)
    const button = useRef(null)
    const box1 = useRef(null)

    useGSAP(()=> {
        const timeline = gsap.timeline()
        timeline.from([".heading", ".para", ".button"], 1, {opacity : 0, y : "100", skewY : "10", stagger : {amount : .4}, delay : 1  }, "-=1")
        timeline.from(".box-1", 1, {y : 1200, opacity : 0, ease: "power3.out"})
        .from(".box-1", 1.5, {scale : 1.6 }, "-=1")
    })
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex  items-center justify-between antialiased">
      <div className="content flex flex-col items-start justify-center h-[100vh] w-[35vw] ml-[150px]   ">
            <h1 ref={h1} className=" heading text-[45px] font-bold text-white ">
                <div className="overflow-hidden mt-[-200px] text-6xl font-extrabold ">Hello,  <br /> <span className="text-5xl">I AM <span className="text-[#1B9AAA]">KULDEEP SINGH </span></span></div>
                <br />
                <div className="overflow-hidden mt-[-50px]">FRONTEND DEVELOPER</div>
            </h1>
            <p ref={para} className=" para text-[25px] w-[80%] text-[#f0f0f0] font-semibold">
            Transforming Vision into Reality Through Web Development
            </p>
            <button ref={button} className=" button w-[150px] p-[5px] mt-[40px] border-[2px] rounded-3xl capitalize text-white text-lg hover:bg-[#1B9AAA]">Explore</button>
      </div>
      <div>
        <div ref={box1} className="box-1 absolute top-[-40px] right-[-10px] opacity-55 z-10 w-1/2 h-4/5  ">
          <ProjectCard />
        </div>
       
      </div>
      <BackgroundBeams />
    </div>
  );
}
