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
    <div className="flex flex-col lg:flex-row  lg:gap-32 bg-black ">
      
        
      <div className="content flex flex-col leading-loose items-start justify-center pl-9 lg:mt-3 lg:h-[100vh] lg:w-[40vw] lg:ml-[130px] ">
            <h1 ref={h1} className=" heading font-bold text-white leading-loose ">
                <div className="overflow-hidden text-3xl lg:mt-[-200px] lg:text-7xl font-extrabold">Hello,  <br /> <span className="text-3xl lg:text-5xl">I AM <span className="text-[#1B9AAA]">KULDEEP SINGH </span></span></div>
                
                <div className="overflow-hidden text-2xl lg:text-4xl">FRONTEND DEVELOPER</div>
            </h1>
            <p ref={para} className=" para text-sm lg:text-[25px] w-[80%] text-[#f0f0f0] font-semibold leading-relaxed tracking-wider">
            Transforming Vision into Reality Through Web Development
            </p>
            <button ref={button} className=" button w-[150px] p-[5px] mt-7 lg:mt-[40px] border-[2px] rounded-3xl capitalize text-white text-lg hover:bg-[#1B9AAA]">Explore</button>
      </div>

  
      <Lottie animationData={Animation}  className="lg:mb-32 px-5" />
    </div>
    </div>
  )
};

export default HomeLanding
