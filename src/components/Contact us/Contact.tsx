import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail, IoLogoInstagram, IoMdMail } from "react-icons/io";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiTelegramLogo } from "react-icons/pi";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const inputRef = useRef(null);
    const form = useRef(null);

    useGSAP(() => {
        gsap.from(headingRef.current, {
            scale: 5,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
        });
        gsap.from(paraRef.current, {
            scale: 0.5,
            opacity: 0,
            duration: 2.5,
            delay: 0.7,
            ease: "elastic.out(1,0.3)",
        });
        gsap.from(".input", 0.4, {
            x: 500,
            scale: 0.4,
            stagger: 0.5,
            ease: "expo.out",
            delay: 1,
            opacity: 0,
        });
        gsap.from(".icon-divide", 2.4, {
            x: -500,
            scale: 0.4,
            stagger: 0.5,
            ease: "elastic.out(1,0.3)",
            delay: 1,
            opacity: 0,
        });
        gsap.from(".line", 2, { x: 500, opacity: 0, scale: 0.2 });
        gsap.from(".links", 2, { x: 500, opacity: 0, scale: 0.2 });
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm("service_zsuw4is", "template_d7okpi4", e.currentTarget, {
                publicKey: "nQBT6JzMKVSXkETVQ",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className=" w-screen h-screen bg-black z-50 pt-10 px-20 pb-28 relative">
            <div className="">
                <div className="">
                    <h1
                        ref={headingRef}
                        className="headingRef  text-5xl text-[#1B9AAA] font-bold text-center"
                    >
                        Get in touch
                    </h1>
                    <p
                        ref={paraRef}
                        className=" paraRef text-2xl text-white mt-4 font-medium text-center"
                    >
                        Fill your name and gmail and give us a message
                    </p>
                </div>

                <div className="flex gap-20 px-20 mt-10">
                    <div className="w-[40%]">
                        <p className="line text-start text-[#1B9AAA] text-2xl font-bold">
                            Contact Info
                        </p>
                        <div className="line border-[2px] w-full rounded-xl mb-5 mt-1"></div>
                        <div className="flex flex-col gap-10">
                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#1B9AAA] text-2xl" /> Address
                                </h1>
                                <p className="pl-7 text-white font-medium">Gurgaon</p>
                            </div>

                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">
                                    <FaPhone className="text-[#1B9AAA] text-2xl" /> Phone
                                </h1>
                                <p className="pl-7 text-white font-medium">9991481979</p>
                            </div>

                            <div className="icon-divide text-start">
                                <h1 className="text-start flex text-2xl font-bold text-white items-center gap-2">
                                    <IoIosMail className="text-[#1B9AAA] text-2xl" /> Gmail
                                </h1>
                                <p className="pl-7 text-white font-medium">
                                    ks9842237@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex flex-col  w-[45%] text-start">
                        <h1 className="line text-[#1B9AAA] text-2xl font-bold">
                            Message Me
                        </h1>
                        <div className="line border-[2px] rounded-xl mb-5 mt-1"></div>

                        <div className="flex flex-col gap-3">
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col text-white">
                            <label className="">Name</label>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    name="user_name"
                                    id=""
                                    placeholder="Your Name"
                                    className=" input py-2 rounded-sm px-3 bg-gray-700 outline-none font-medium"
                                />
                                <label>Email</label>
                                <input
                                    ref={inputRef}
                                    type="email"
                                    name="user_email"
                                    id=""
                                    placeholder="Your Gmail"
                                    className=" input py-2 rounded-sm px-3 bg-gray-700 outline-none font-medium"
                                />
                                <label>Message</label>
                                <textarea
                                    ref={inputRef}
                                    rows={9}
                                    name="message"
                                    id=""
                                    placeholder="Your Message"
                                    className=" input py-2 rounded-sm px-3 bg-gray-700  outline-none font-medium"
                                ></textarea>

                                <input type="submit" value="Send" className="z-50 text-xl bg-[#1B9AAA] hover:cursor-pointer py-1 mt-1" />
                            </form>

                            

                            <div className=" links flex gap-10 px-5 justify-center mt-8">
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <FaFacebookF />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <IoLogoInstagram />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <FaLinkedinIn />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <FaGithub />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <PiTelegramLogo />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="bg-[#1B9AAA] px-3 py-2 text-3xl rounded-xl"
                                        to="https://www.facebook.com/profile.php?id=100007822246449"
                                    >
                                        <button>
                                            <IoMdMail />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
