
import React from "react";
import Expertise from "@/components/Home/Expertise";
const HomeBanner01 = React.lazy(() => import("../components/Home/HomeBanner01"))
import Technology from "@/components/Home/Technology";
import Work from "@/components/Home/Work";
import HomeLanding from "@/components/Home/HomeLanding";




const Home = () => {
  return (
    <div className="bg-black">

      <HomeLanding />
       <HomeBanner01 />
      <Expertise />
      <Technology />
       <Work />  
  
    </div>
  
  )
};

export default Home
