"use client";

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card/3d-card";


export function ThreeDCardDemo() {
    return (
        <>
      
             <CardContainer className="inter-var h-4/5  ">
             <CardBody className="bg-gray-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-4/5 md:h-[65vh] h-auto rounded-xl p-6 border">
                
                 <CardItem translateZ="100" className="w-full mt-4">
                     <img
                         src="10.jpg"
                         height="1000"
                         width="1000"
                         className="w-[100%] h-[100%] bg-cover bg-center rounded-xl group-hover/card:shadow-xl"
                         alt="thumbnail"
                     />
                 </CardItem>

             </CardBody>
         </CardContainer>
        
        </>
            );

        }
    

