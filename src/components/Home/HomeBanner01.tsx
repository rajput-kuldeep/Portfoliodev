import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const HomeBanner01 = () => {

const animateRef = useRef(null)

useGSAP(() => {
    
  const tl = gsap.timeline({
    scrollTrigger : {
      trigger : "#main",
      start : "50% 50%",
      end : "250% 50%",
      scrub : true,
      pin : true,
      // markers : true,
    }
  })

  tl.to(".svg", {
    maskSize : "200%",
    
  }, "a");


  tl.to(".img", {
    backgroundSize : "100%",

  }, "a");


  tl.to(".svg2", {
    maskSize : "200%",
    
  }, "b");
   
  tl.to(".img2", {
    backgroundSize : "100%",

  }, "b");
}, {scope : animateRef})

  return (
    <>
     <div ref={animateRef}>
      <div id="main" className="w-[100vw] h-[80vh] lg:h-[100vh] bg-black   lg:bg-[#1B9AAA]">
        <div className="svg w-full h-full bg-orange-300 ">
        <div className="img">
          <div className="svg2">
            <div className="img2">

            </div>
          </div>
        </div>
        </div>
      </div>
      </div> 
    </>
  )
};

export default HomeBanner01
