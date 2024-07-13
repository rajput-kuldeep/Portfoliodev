
const Technology = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col px-[30%] pt-20  gap-10  ">
        <h1 className="text-3xl font-bold text-center">Full list of tools and technologies I use</h1>
        <div className="px-14 flex flex-col justify-evenly gap-10 ">
        <div className="flex gap-20  text-xl ">
            <h1 className="">Core Frontend Tools</h1>
            <ul className=" ">
                <li>React</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Appwrite</li>
            </ul>
        </div>
        <div className="flex gap-[7.5rem] text-xl  ">
            <h1 className="">State Managers</h1>
            <ul>
                <li>Redux</li>
                <li>Contaxt API</li>
            </ul>
        </div>
        <div className="flex gap-8 text-xl   ">
            <h1 className="">React Ecosystem Libraries</h1>
            <ul >
                <li>Axios</li>
                <li>React Hook Form</li>
                <li>React Router Dom</li>
                <li></li>
            </ul>
        </div>

        <div className="flex gap-56 text-xl  ">
            <h1 className="">CSS</h1>
            <ul>
                <li>Tailwind</li>
                <li>Styled Component</li>
                <li>CSS Modules</li>
            </ul>
        </div>
        <div className="flex gap-60 text-xl ">
            <h1 className="">UI</h1>
            <ul>
                <li>Material UI</li>
                <li>shadcn/UI</li>
                <li>Bootstrap</li>
                <li>Pixel Perfect</li>
                <li>Adaptive & Responsive</li>
                <li>Asternity UI</li>
            </ul>
        </div>
        <div className="flex gap-40 text-xl ">
            <h1 className="">Animations</h1>
            <ul>
                <li>Framer Motion</li>
                <li>gsap</li>
                
            </ul>
        </div>
      </div>

      </div>

    </>
  )
};

export default Technology
