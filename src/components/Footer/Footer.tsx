const Footer = () => {
  return (
    <div className=" bg-black">
        <div className="h-[.5px] w-full bg-white"></div>
      <footer className="footer w-full h-96 bg-black flex flex-col lg:flex-row lg:gap-40 text-white">
        <div className="flex flex-col justify-center lg:ml-20 pl-7">
          <div className="text-2xl lg:text-6xl font-semibold">
            <p>Have a project in mind?</p>
            <p className="text-[#1B9AAA]">Let’s get to work.</p>
          </div>
          <div className="  mt-2">
            <p className="" >ks9842237@gmail.com</p>
            <p className="" >9991481979</p>
          </div>
        </div>
        <div className="h-full w-[1px] bg-white"></div>
        <div className="flex flex-col gap-10 items-start justify-center">
          <div><h1 className="text-xl px-7  lg:px-0 font-medium uppercase tracking-wider">usefull links</h1></div>
          <div className="lg:flex px-7 lg:gap-40 text-md font-medium leading-loose ">
           <div>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact</p>
           </div>
           <div>
            <p>facebook</p>
            <p>instagram</p>
            <p>linkedIn</p>
            <p>github</p>
           </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
