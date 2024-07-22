import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const Header = () => {

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
    <div className="flex justify-between p-5 headerimg bg-black text-white ">
      <div>
        <h1 ref={logoRef} className= "logo text-2xl font-bold text-orange-500"><Link to="/"><img src="logo.png" alt="" className="w-20"/></Link></h1>
      </div>
    <div className="flex justify-end pr-20 ">
      <ul className="flex gap-20 text-lg font-medium ">
      <li className="link1 hover:text-[#1B9AAA]"  ref={link1Ref}><NavLink to='/'>Home</NavLink> </li>
      <li className="link2 hover:text-[#1B9AAA]" ref={link2Ref}><NavLink to='about'>About</NavLink> </li>
      <li className="link2 hover:text-[#1B9AAA]" ><NavLink to='contact-form'>ContactUs</NavLink> </li>
      <li className="link4 hover:text-[#1B9AAA]" ref={link4Ref}><NavLink to='contact-us'>Contact-us</NavLink> </li>
      </ul>
    </div>
    </div>

    </>
  )
};

export default Header
