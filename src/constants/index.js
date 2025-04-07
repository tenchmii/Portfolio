import tools from '/assets/settings.png';
import darty from '/assets/darty.png';
import mcdonald from '/assets/mcdonalds.png';
import franceSecours from '/assets/franceSecours.png';
import Twitter from '/assets/twitter.png';
import Meetic from '/assets/meetic.png';
import Connect4 from '/assets/puissance4.png';
import Spotify from '/assets/spotify.png'
import Responsive from '/assets/responsive.png';
import Cinema from '/assets/cinema.png';

export const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "experience",
     title: "Experience",
   },
   {
      id: "projects",
      title: "Projects",
   },
   {
     id: "contact",
     title: "Contact",
   },
 ];

const services = [
   {
      title: "Web Developer",
      icon: tools,
   },
   {
      title: "Front-end Developer",
      icon: tools,
   },
   {
      title: "Back-end Developer",
      icon: tools,
   },
   {
      title: "Tech Enthusiast",
      icon: tools,
   },
];

const experiences = [
   {
      title: "Stagiaire",
      company_name: "Darty",
      icon: darty,
      iconBg: "#fff",
      date: "Jan 2023 - Feb 2024",
      points: [
        "Accueilli et conseillé les clients sur les produits électroniques et électroménagers.",
        "Assisté l'équipe dans la gestion des stocks et la mise en rayon des produits.",
        "Appris les bases du service client et de la vente en magasin.",
      ],
    },
   {
      title: "Équipier polyvalent",
      company_name: "McDonald's",
      icon: mcdonald,
      iconBg: "#fff",
      date: "Août 2024 - Nov 2024",
      points: [
        "Travail en équipe dans un environnement rapide et exigeant.",
        "Gestion du temps et attention aux détails pour assurer la qualité des commandes.",
        "Contribution à une expérience client positive grâce à la précision et la rapidité.",
      ],
    },
    {
      title: "Bénévole",
      company_name: "Secours Populaire Français",
      icon: franceSecours,
      iconBg: "#fff",
      date: "Jan 2025",
      points: [
         "Emballage et préparation de cadeaux pour des événements caritatifs.",
         "Service client et souci du détail pour une présentation soignée.",
         "Travail en équipe dans un environnement dynamique."
      ]
   },
];

const projects = [
   {
      id: 1,
      frontImage: Twitter,
      title: "Twitter - X",
      description: "Projet de groupe, les outils utilisés sont la programmation orientée objet PHP, mysql et Javascript",
      duree: "Durée : 1 mois",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/x-social-media",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 2,
      frontImage: Meetic,
      title: "Meetic",
      description: "Le projet individuel et les outils utilisés sont php et mysql",
      duree: "Durée :  2 semains",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/meetic-clone",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 3,
      frontImage: Connect4,
      title: "Connect 4",
      description: "Connect 4 est un jeu classique de stratégie où deux joueurs s’affrontent pour aligner quatre de leurs jetons.",
      duree: "Durée : 2 semaine",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/connect4-game",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 4,
      frontImage: Spotify,
      title: "Spotify",
      description: "projet de groupe de deux personnes et les outils utilisés sont React, docker et mysql",
      duree: "Durée : 1 semaine",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/maquette-project",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 5,
      frontImage: Responsive,
      title: "Responsive",
      description: "Projet individuel utilisant CSS pour le rendre réactif sur tous les appareils.",
      duree: "Durée : 2 semaines",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/responsive-project",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 6,
      frontImage: Cinema,
      title: "MyCinema",
      description: "Individual project and tools used are php and mysql",
      duree: "Durée : 2 semaines",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/mycinema",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
];

export { services, experiences, projects };
