import Lottie from "lottie-react"
import About from "../../assets/About.json"

const   AboutHeroSection = () => {


    return (
        <>
        <div className="bg-black w-full lg:h-40">
            <Lottie animationData={About} className="relative w-[100vw]" />
            <div className="absolute top-32">
                <h1 className="text-3xl px-5  font-bold lg:px-24 lg:text-7xl text-[#1B9AAA]">About Me</h1>
                <p className="font px-5 lg:px-24 text-md lg:pr-64 font-medium pt-4 leading-relaxed text-white ">Hello, I'm Kuldeep Singh, a frontend alchemist transforming lines of code into engaging digital experiences. With a keen eye for detail and a passion for design, I craft websites that not only look stunning but also offer seamless user interactions.Beyond the screen, I immerse myself in sports and Ehical Hacking, fueling my creativity and keeping me inspired. I believe in the magic of continuous learning, always exploring new technologies to stay ahead in the ever-evolving world of frontend development
                    <br />
                I’m excited about the possibility of collaborating on innovative projects. Let’s connect and create something extraordinary together! Reach out to me at "ks9842237@gmail.com"..</p>
            </div>
        </div>
        </>
    )
}

export default AboutHeroSection