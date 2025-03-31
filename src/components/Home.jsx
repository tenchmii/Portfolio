import React from "react";
import ArcadeCanvas from "./canvas/Arcade";
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate('/hero');
   };

   return (
      <div
         className="bg-black flex flex-row w-full h-full"
         onClick={handleClick}>
         <p className="text-white absolute top-0 left-0">Hello! Welcome to my Portfolio</p>
         <div className="flex flex-col flex-grow">
            <div className="w-full h-full">
               <ArcadeCanvas />
            </div>
         </div>
      </div>
   );
};
export default Home;
