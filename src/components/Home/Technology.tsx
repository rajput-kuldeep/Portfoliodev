const Technology = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col lg:px-[30%] pt-20  gap-10  ">
        <h1 className="text-xl px-8 lg:px-0 lg:text-3xl font-bold lg:text-center">
          Full list of tools and technologies I use
        </h1>
        <div className="px-8 flex flex-col  gap-10 text-md lg:text-xl lg:px-14 ">
          <div className="flex lg:gap-20 gap-10  ">
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
          <div className="flex lg:gap-[7.5rem] gap-[4.4rem]   ">
            <h1 className="">State Managers</h1>
            <ul>
              <li>Redux</li>
              <li>Contaxt API</li>
            </ul>
          </div>
          <div className="flex lg:gap-8 gap-[0.2rem]  ">
            <h1 className="">React Ecosystem Libraries</h1>
            <ul>
              <li>Axios</li>
              <li>React Hook Form</li>
              <li>React Router Dom</li>
              <li></li>
            </ul>
          </div>

          <div className="flex lg:gap-56 gap-[9.5rem]  ">
            <h1 className="">CSS</h1>
            <ul>
              <li>Tailwind</li>
              <li>Styled Component</li>
              <li>CSS Modules</li>
            </ul>
          </div>
          <div className="flex lg:gap-60 gap-40 ">
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
          <div className="flex lg:gap-40 gap-24  ">
            <h1 className="">Animations</h1>
            <ul>
              <li>Framer Motion</li>
              <li>gsap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
