import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {  useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";




const Contact = () => {

    let headingRef = useRef(null)
    let paraRef = useRef(null)
    const inputRef = useRef(null)

    useGSAP(() => {
        gsap.from(headingRef.current, {scale : 5, opacity : 0, duration : 1.5 , ease: "expo.out",})
        gsap.from(paraRef.current, {scale : .5, opacity: 0, duration : 2.5, delay : .7, ease: "elastic.out(1,0.3)",})
        gsap.from(".input", .4,  {x: 500, scale : .4, stagger : .5, ease : "expo.out", delay : 1, opacity : 0})
        gsap.from(".icon-divide", 2.4, {x : -500, scale : .4, stagger : .5, ease : "elastic.out(1,0.3)", delay : 1, opacity : 0 })
        gsap.from(".line", 2, {x : 500, opacity : 0, scale : .2})
    }, [])
    return (
        <div className=" w-screen h-screen bg-black pt-10 px-20 ">
            <div className="">
                <div className="">
                    <h1 ref={headingRef} className="headingRef  text-5xl text-red-700 font-bold text-center">Contact Us</h1>
                    <p ref={paraRef} className=" paraRef text-2xl text-white mt-4 font-medium text-center">
                        Fill your name and gmail and give us a message
                    </p>
                </div>

                <div className="flex gap-20 px-20 mt-10">
                    <div className="w-[40%]">
                        <p  className="line text-start text-red-700 text-2xl font-bold">
                            Contact Info
                        </p>
                        <div className="line border-[2px] w-full rounded-xl mb-5 mt-1"></div>
                        <div className="flex flex-col gap-10">
                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">

                                    <FaMapMarkerAlt className="text-red-700 text-2xl" /> Address
                                </h1>
                                <p className="pl-7 text-white font-medium">Gurgaon</p>
                            </div>

                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">

                                    <FaPhone className="text-red-700 text-2xl" /> Phone
                                </h1>
                                <p className="pl-7 text-white font-medium">9991481979</p>
                            </div>

                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">

                                    <IoIosMail className="text-red-700 text-2xl" /> Gmail
                                </h1>
                                <p className="pl-7 text-white font-medium">ks9842237@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  w-[45%] text-start">
                        <h1 className="line text-red-700 text-2xl font-bold">Message Me</h1>
                        <div className="line border-[2px] rounded-xl mb-5 mt-1"></div>

                        <div className="flex flex-col gap-3">
                            <input
                            ref={inputRef}
                                type="text"
                                name=""
                                id=""
                                placeholder="Your Name"
                                className=" input py-2 rounded-sm px-3 bg-gray-700 outline-none font-medium"
                            />
                            <input
                             ref={inputRef}
                                type="text"
                                name=""
                                id=""
                                placeholder="Your Gmail"
                                className=" input py-2 rounded-sm px-3 bg-gray-700 outline-none font-medium"
                            />
                            <textarea
                             ref={inputRef}
                                rows={9}
                                name=""
                                id=""
                                placeholder="Your Message"
                                className=" input py-2 rounded-sm px-3 bg-gray-700  outline-none font-medium"
                            ></textarea>

                            <button  ref={inputRef} className="input bg-red-700 text-white w-20 p-2 rounded-lg text-lg font-medium">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
