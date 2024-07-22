const Footer = () => {
  return (
    <div className="pt-16 bg-black">
        <div className="h-[.5px] w-full bg-white"></div>
      <footer className="footer w-full h-96 bg-black flex gap-40 text-white">
        <div className="flex flex-col justify-center ml-20">
          <div className="text-6xl font-semibold">
            <p>Have a project in mind?</p>
            <p className="text-[#1B9AAA]">Let’s get to work.</p>
          </div>
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-3 border-[1px] rounded-3xl" >ks9842237@gmail.com</button>
            <button className="px-8 py-3 border-[1px] rounded-3xl" >9991481979</button>
          </div>
        </div>
        <div className="h-full w-[1px] bg-white"></div>
        <div className="flex flex-col gap-10 items-start justify-center">
          <div><h1 className="text-xl font-medium uppercase tracking-wider">usefull links</h1></div>
          <div className="flex gap-40 text-md font-medium leading-loose ">
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
          <div>
            <input type="text" name="" id="" placeholder="Type your Email" className="rounded-3xl px-20 text-start py-4 bg-black text-white border-[.2px] "/>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
