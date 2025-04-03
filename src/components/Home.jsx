import React from "react";
import ArcadeCanvas from "./canvas/Arcade";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hero");
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center">
      <div className="absolute top-1/4 text-center text-white glow z-10">
        <h1 className="sm:text-7xl text-2xl">Welcome to my portfolio</h1>
        <button
          onClick={handleClick}
          className="border border-white uppercase px-4 py-2 mt-4 relative z-20"
        >
          Start
        </button>
      </div>

      <div className="w-full h-full absolute top-20 left-0 pointer-events-none">
        <ArcadeCanvas />
      </div>
    </div>
  );
};

export default Home;
