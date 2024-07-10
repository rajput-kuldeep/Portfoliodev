import {useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";


const HomeLanding = () => {

    let h1 = useRef(null)
    let para = useRef(null)
    let button = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)

    useGSAP(()=> {
        const timeline = gsap.timeline()
        timeline.from([".heading", ".para", ".button"], 1, {opacity : 0, y : "100", skewY : "10", stagger : {amount : .4}, delay : 1  }, "-=1")
        timeline.from(".box-1", 1, {y : 1200, opacity : 0, ease: "power3.out"})
        .from(".box-1", 1.5, {scale : 1.6 }, "-=1")

        timeline.from(".box-2", .8, {y : 1200, opacity : 0, ease: "power3.out"})
        .from(".box-2", 1.5, {scale : 1.6 }, "-=1")

        timeline.from(".box-3", .8, {y : 1200, opacity : 0, ease: "power3.out"})
        .from(".box-3", 1.5, {scale : 1.6 }, "-=1")
        

    })
  return (
    <div className="flex items-center justify-between w-full h-full bg-black">
        
      <div className="content flex flex-col items-start justify-center h-[100vh] w-[35vw] ml-[150px] mr-[50px]  ">
            <h1 ref={h1} className=" heading text-[45px] font-bold text-white ">
                <div className="overflow-hidden mt-[-100px] ">Hard Work beats talent</div>
                <br />
                <div className="overflow-hidden mt-[-50px]">When talent doesn't work hard.</div>
            </h1>
            <p ref={para} className=" para text-[15px] w-[80%] text-[#f0f0f0] font-extralight">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti dignissimos voluptate nihil libero necessitatibus sed, vitae nemo quod sunt reiciendis. Eligendi officia suscipit rem.
            </p>
            <button ref={button} className=" button w-[150px] p-[5px] mt-[40px] border-[2px] rounded-3xl capitalize text-white text-lg hover:bg-orange-600">Explore</button>
      </div>


      <div>
        <div ref={box1} className="box-1 absolute top-[80px] right-[130px] "></div>
        <div ref={box2} className="box-2 absolute top-[200px] right-[400px]"></div>
        <div ref={box3} className="box-3 absolute top-[350px] right-[80px]"></div>
      </div>
    </div>
  )
};

export default HomeLanding
