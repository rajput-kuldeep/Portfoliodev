import DescriptionCardType from "@/data";
import Projects from "./Projects";
import { aboutCards }  from "@/data/ProjectData";



const ProjectDisplay = () => {
  return (
    <div className="bg-black text-white">
       <div className='py-28 mt-20 lg:py-20 w-full'>
            {
                aboutCards.map((cardData: DescriptionCardType) => (
                    <Projects
                        key={cardData.heading}
                        cardData={cardData} />
                ))
            }
        </div>
    </div>
  )
};

export default ProjectDisplay
