// import HomeBanner01 from "@/components/Home/HomeBanner01";

import { HeroParallaxDemo } from "@/components/Hero-parallax";
import Expertise from "@/components/Home/Expertise";
import ProjectCard from "@/components/Home/ProjectCard";
// import HomeLanding from "@/components/Home/HomeLanding";
import Technology from "@/components/Home/Technology";



const Home = () => {
  return (
    <div>
      {/* <HomeLanding /> */}
      <HeroParallaxDemo />

       {/* <HomeBanner01 /> */}
      <Expertise />
      <Technology />
      {/* <Work />  */}
       <ProjectCard />
    </div>
  )
};

export default Home
