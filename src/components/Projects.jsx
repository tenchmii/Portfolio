import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../constants"; // Import projects from constants file

import { textVariant } from "../utils/motion";

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  function handleFlip(cardId) {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  }

  return (
    <div className="w-full min-h-screen text-white relative mt-5">
      <div className="absolute top-10 sm:top-0 left-5 sm:left-20 z-10 lg:top-0">
      <Link to="/hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </Link>
      </div>

      <motion.div variants={textVariant()} className="text-center">
        <p className="text-[14px] sm:text-[16px] uppercase tracking-wide">
          Quelques-uns des projets que j'ai réalisés.
        </p>
        <h2 className="font-black text-3xl sm:text-5xl">Projets</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flip-card w-full max-w-[600px] h-[400px] cursor-pointer"
            onClick={() => handleFlip(project.id)}
          >
            <motion.div
              className="flip-card-inner w-full h-full relative"
              animate={{ rotateY: flippedCard === project.id ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="flip-card-front w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${project.frontImage})` }}
              ></div>
              <div
                className={`flip-card-back w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-white p-6 rounded-lg shadow-lg ${project.backgroundColor}`}
              >
                <h1 className="text-xl font-bold mb-2">{project.title}</h1>
                <p className="text-center text-sm sm:text-base">{project.description}</p>
                <a href={project.repoLink} target="_blank" className="mt-4 text-blue-500">
                  Voir le repo
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
