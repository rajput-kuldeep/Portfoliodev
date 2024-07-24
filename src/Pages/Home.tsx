
import React from "react";
import Expertise from "@/components/Home/Expertise";

const HomeLanding = React.lazy(() => import("@/components/Home/HomeLanding"))
const HomeBanner01 = React.lazy(() => import("../components/Home/HomeBanner01"))
import Technology from "@/components/Home/Technology";
import Work from "@/components/Home/Work";




const Home = () => {
  return (
    <div>

      <HomeLanding />
       <HomeBanner01 />
      <Expertise />
      <Technology />
       <Work />  
  
    </div>
  
  )
};

export default Home
