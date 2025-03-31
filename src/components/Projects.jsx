import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Twitter from "/assets/twitter.png";
import Meetic from "/assets/meetic.png";
import Connect4 from "/assets/puissance4.png";
import Maquette from "/assets/maquette.png";
import Responsive from "/assets/responsive.png";
import Cinema from "/assets/cinema.png";

import { textVariant } from "../utils/motion";

const projectsData = [
   {
      id: 1,
      frontImage: Twitter,
      title: "X - Plateforme de Médias Sociaux",
      description: "X est une plateforme de médias sociaux similaire à Twitter, développée avec MySQL et PHP OOP. Ce projet vise à offrir une expérience de communication et de partage de contenu en temps réel entre utilisateurs. Il permet aux utilisateurs de créer des comptes, de publier des messages, d’interagir avec d’autres profils et de suivre des sujets d’intérêt. L’architecture repose sur l’utilisation de MySQL pour la gestion des données et PHP pour le traitement côté serveur, assurant une performance optimale et une gestion des utilisateurs efficace.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 2,
      frontImage: Meetic,
      title: "Meetic",
      description: "Meetic est un clone d’une application de rencontres, où les utilisateurs peuvent créer des profils, ajouter des photos, et interagir avec d’autres membres à travers des messages privés. Ce projet a été conçu pour simuler une plateforme de rencontres en ligne avec des fonctionnalités de recherche de profils, de filtres basés sur les préférences, et un système de messagerie. Le projet a été réalisé avec des technologies web modernes telles que MySQL pour la gestion des données et PHP pour les opérations côté serveur, offrant ainsi une expérience utilisateur fluide et réactive.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/meetic-clone",
    },
    {
      id: 3,
      frontImage: Connect4,
      title: "Connect 4",
      description: "Connect 4 est un jeu classique de stratégie où deux joueurs s’affrontent pour aligner quatre de leurs jetons. Ce projet a été développé en utilisant JavaScript pour la logique du jeu, avec une interface simple et intuitive qui permet aux utilisateurs de jouer facilement. L’application permet de jouer en solo contre l’ordinateur ou de défier un autre joueur. Les règles du jeu sont strictement respectées et l’expérience utilisateur est optimisée pour garantir un jeu fluide et réactif. Le projet a été conçu avec un design responsive pour être joué sur tous les types d’appareils.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/connect4-game",
    },
    {
      id: 4,
      frontImage: Maquette,
      title: "Maquette",
      description: "Ce projet consiste en la création d’une maquette interactive d’une application ou d’un site web en se basant sur une inspiration donnée. Le but était de reproduire avec fidélité l’apparence et la structure de l’inspiration tout en ajoutant des touches personnelles pour améliorer l’expérience utilisateur. Ce projet a été réalisé en utilisant HTML, CSS et JavaScript, avec une attention particulière portée à la responsivité et à l’accessibilité. La maquette a été conçue pour fonctionner sur différents types d’écrans, offrant une expérience utilisateur fluide et agréable.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/maquette-project",
    },
    {
      id: 5,
      frontImage: Responsive,
      title: "Responsive",
      description: "Ce projet met en œuvre les principes de conception responsive afin que l’application ou le site Web s’adapte parfaitement à différentes tailles d’écrans et dispositifs. Grâce à l’utilisation de media queries CSS et de grilles flexibles, le design du projet est fluide et réactif. L’objectif était de garantir une expérience utilisateur optimale, que ce soit sur un smartphone, une tablette ou un ordinateur de bureau. Ce projet est un excellent exemple de la façon dont les technologies modernes peuvent être utilisées pour créer des interfaces utilisateurs qui fonctionnent sur tous les types de dispositifs, avec une performance et une fluidité maximales.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/responsive-project",
    },
    {
      id: 6,
      frontImage: Cinema,
      title: "MyCinema",
      description: "MyCinema est une application qui permet à l’utilisateur de consulter des informations sur des films et des séries en utilisant une base de données alimentée par SQL. Ce projet utilise SQL pour récupérer et gérer les données sur les films, les acteurs, et les genres. Il inclut une interface utilisateur qui permet aux utilisateurs de rechercher des films, de lire des critiques, de voir des détails sur chaque film, et d’obtenir des recommandations basées sur leurs préférences. Ce projet est un exemple d’utilisation de SQL pour la gestion de grandes quantités de données et de leur intégration dans une application front-end dynamique avec des requêtes efficaces.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/mycinema",
    },
    
];

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  function handleFlip(cardId) {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  }

  return (
    <div className="w-full min-h-screen  text-white relative mt-20 mb-20">
      <div className="absolute top-0 left-5 sm:left-20 z-10">
        <Link to="/hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
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
        <p className="text-secondary text-sm sm:text-lg uppercase tracking-wide">
        Quelques-uns des projets que j'ai réalisés.
        </p>
        <h2 className="font-black text-3xl sm:text-5xl">Projets</h2>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
        {projectsData.map((project) => (
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
                <a href={project.repoLink} target="_blank" className="mt-4 text-blue-500">Voir le repo</a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
