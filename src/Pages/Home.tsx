
import Expertise from "@/components/Home/Expertise";
import HomeBanner01 from "@/components/Home/HomeBanner01";
import HomeLanding from "@/components/Home/HomeLanding";
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
