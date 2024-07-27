import { Link } from "react-router-dom";

type cardType = {
    imgsrc : string;
    heading : string;
    content : string;
    imagePosition : string;
    link : string
}


const Projects = ({cardData} : {cardData : cardType}) => {
  return (
    <div>
       <div
            key={cardData.heading}
            className={`'w-full flex flex-col lg:flex-row  lg:gap-10 lg:px-20 px-4 z-50
            ${cardData.imagePosition == "right" ? 'lg:flex-row-reverse' : 'lg:flex-row'}
             items-center md:items-start py-10 my-10 '`}>
            <div className="w-[100vw] px-5 lg:px-0 lg:w-1/2">
                <img src={cardData.imgsrc} alt="" className="h-96 rounded-xl object-cover bg-center bg-cover" />
            </div>
            <div className='lg:w-[50%] flex flex-col px-4 '>
                <h2 className=' my-5 lg:mt-0 lg:mb-5 text-4xl font-semibold text-start text-[#1B9AAA] '>
                    {cardData.heading}
                </h2>
                <p className='leading-8 lg:text-xl text-start'>
                    {cardData.content}
                </p>
                <Link to={cardData.link} className="text-start font-bold text-xl z-20">Link : {cardData.link} </Link>
            </div>
        </div>
    </div>
  )
};

export default Projects
