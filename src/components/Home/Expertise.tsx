
const Expertise = () => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center pt-10 text-white bg-black px-56 ">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-bold text-center">Expertise</h1>
                        <div className="w-48 border-[2.5px] rounded-xl m-auto border-[#1B9AAA]  "></div>
                        <p className="text-2xl font-medium leading-normal ml-2 tracking-wider text-start ">Discover my arsenal of frontend tools & technologies — TypeScript, React, Redux, Next.js & more. From UI libraries like Material UI & shadcn/ui to custom animations using GSAP & Framer Motion, I deliver stunning user experiences.</p>
                    </div>
                    <div className="flex items-center justify-between w-full px-10 mt-10 ">
                        <div>
                            <img src="React.svg" alt="" className="w-14 mb-4 " />
                            <span className="text-xl font-semibold">React</span>
                        </div>
                        <div>
                            <img src="Next.svg" alt="" className="w-14 mb-4" />
                            <span className="text-xl font-semibold">Next.js</span>
                        </div>
                        <div>
                            <img src="Redux.svg" alt="" className="w-14 mb-4"/>
                            <span className="text-xl font-semibold">Redux</span>
                        </div>
                        <div>
                            <img src="TS.svg" alt="" className="w-14 mb-4 "/>
                            <span className="text-xl font-semibold">Typescript</span>
                        </div>
                        <div>
                            <img src="HTML.svg" alt="" className="w-14 mb-4"/>
                            <span className="text-xl font-semibold">HTML</span>
                        </div>
                        <div>
                            <img src="CSS.svg" alt="" className="w-14 mb-4"/>
                            <span className="text-xl font-semibold ml-2">CSS</span>
                        </div>
                    </div>
                   
        </div>

        
      </div >
      
    </>
  )
};

export default Expertise
