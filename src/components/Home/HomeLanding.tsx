import {useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import Animation from "../../assets/Animation.json"




const HomeLanding = () => { 
  

    const h1 = useRef(null)
    const para = useRef(null)
    const button = useRef(null)
    

    useGSAP(()=> {
        const timeline = gsap.timeline()
        timeline.from([".heading", ".para", ".button"], 1, {opacity : 0, y : "100", skewY : "10", stagger : {amount : .4}, delay : 1  }, "-=1")
        timeline.from(".box-1", 1, {y : 1200, opacity : 0, ease: "power3.out"})
    })
  return (
    <div>
      <div>
        
      </div>
    <div className=" flex gap-20 bg-black ">
      
        
      <div className="content flex flex-col items-start justify-center mt-3 h-[100vh] w-[35vw] ml-[130px] ">
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

      {/* <img src="development.webp" alt="" className="h-[80vh] " /> */}
      <Lottie animationData={Animation} style={{ width: 600, height: 600 }} className="ml-20" />
    </div>
    </div>
  )
};

export default HomeLanding
