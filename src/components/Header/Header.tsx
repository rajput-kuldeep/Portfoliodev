import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoRef = useRef(null)
  const link1Ref = useRef(null)
  const link2Ref = useRef(null)
  const link4Ref = useRef(null)

  useGSAP(() => {
    const timeline  = gsap.timeline()

    timeline.from(".logo", .8, {opacity : 0, y : 100})
    timeline.from([".link1", ".link2", ".link3", ".link4"], 1.3, {opacity : 0, y : -200, stagger : {amount : .4}, ease : "power3.out"})


  })

  return (
    <>
      <div className="flex justify-between items-center bg-black text-white w-[100vw]">
        
          
            <Link ref={logoRef}  to="/" className=" ">
              <img src="logo.png" alt="" className="h-20" />
            </Link>
       
        <div className=" lg:hidden pr-5 w-10 ">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={` lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
      <ul className=" lg:gap-20 lg:flex-row text-lg font-medium flex flex-col items-end px-10 gap-3  ">
      <li className="link1 hover:text-[#1B9AAA]"  ref={link1Ref}><NavLink to='/'>Home</NavLink> </li>
      <li className="link2 hover:text-[#1B9AAA]" ref={link2Ref}><NavLink to='about'>About</NavLink> </li>
      <li className="link4 hover:text-[#1B9AAA]" ref={link4Ref}><NavLink to='contact-us'>Contact-us</NavLink> </li>
      </ul>
    </div>
      </div>
    </>
  );
};

export default Header;
