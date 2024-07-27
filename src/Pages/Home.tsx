

import React, { Suspense } from "react";
import Expertise from "@/components/Home/Expertise";

import Technology from "@/components/Home/Technology";

import HomeLanding from "../components/Home/HomeLanding";
import Slider from "@/components/Home/Slider";

const HomeBanner01 = React.lazy(() => import("../components/Home/HomeBanner01"))




const Home = () => {
  return (
    <div className="bg-black">

      <HomeLanding />
       <Suspense>
       <HomeBanner01 />
       </Suspense>
       {/* <Work />   */}
       <Slider />
       
       
      <Expertise />
      <Technology />
  
    </div>
  
  )
};

export default Home
