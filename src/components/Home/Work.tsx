
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Work = () => {

    const box = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger : ".part-7",
                start : "50% 50%",
                end : "300% 50%",
                pin : true,
                scrub : 1,
            },
            
        })

        timeline.to(".demo", {
            bottom : "7%"
        })

        timeline.to(".our-work-txt-div", {
            height : "80vh",
            width : "80vw"
        }, "height")

        timeline.to(".our-work-txt", {height : "80vh", width : "80vw"}, "height")

        timeline.to(".our", {
            left : "-8%",
            top : "-5%"
        }, 'height')

        timeline.to(".work", {
            right : "-8%",
            bottom : "-5%"
        }, 'height')
 
        timeline.to(".scroll-img", {
            marginTop : "-300%"
        })


    }, {scope: box})

    return (
        <>
        <div ref={box} className="w-[100vw] min-h-[100vh] ">
            <div className=" part-7 flex items-center justify-center w-[100vw] h-[100vh] bg-black text-white ">
                <div className=" our-work-txt absolute w-[60vw] h-0 ">
                    <h1 className="our absolute left-[35%] top-0 translate-x-[-20%] translate-y-[-50%] text-[5vw]">Our</h1>
                    <h1 className="work absolute right-[35%] bottom-0 translate-x-[20%] translate-y-[50%] text-[5vw]">Work</h1>
                </div>
                <div className="our-work-txt-div flex items-center justify-center overflow-hidden relative w-[60vw] h-0 bg-white ">
                    <div className="w-[100%] h-[80vh] bg-[#919191] overflow-hidden ">
                        <div className="scroll-img w-full mt-0  ">
                            <Link to="contact-us"><img src="1.avif" alt="" className="w-[100%] mb-2" /></Link>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                            <img src="1.avif" alt="" className="w-[100%]"/>
                        </div>
                    </div>

                </div>
                <button className=" demo absolute text-lg bottom-[0] px-4 py-4 bg-[#d1d1d1] text-[0.8vw] border-none rounded-[50px]">book a Demo</button>
            </div>
            </div>
        </>
    )
};

export default Work
