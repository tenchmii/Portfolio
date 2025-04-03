import tools from '/assets/settings.png';
import darty from '/assets/darty.png';
import mcdonald from '/assets/mcdonalds.png';
import franceSecours from '/assets/franceSecours.png';
import Twitter from '/assets/twitter.png';
import Meetic from '/assets/meetic.png';
import Connect4 from '/assets/puissance4.png';
import Maquette from '/assets/maquette.png';
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
      title: "X - Plateforme de Médias Sociaux",
      description: "X est une plateforme de médias sociaux similaire à Twitter, développée avec MySQL et PHP OOP. Ce projet vise à offrir une expérience de communication et de partage de contenu en temps réel entre utilisateurs.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 2,
      frontImage: Meetic,
      title: "Meetic",
      description: "Meetic est un clone d’une application de rencontres, où les utilisateurs peuvent créer des profils, ajouter des photos, et interagir avec d’autres membres à travers des messages privés.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/meetic-clone",
    },
    {
      id: 3,
      frontImage: Connect4,
      title: "Connect 4",
      description: "Connect 4 est un jeu classique de stratégie où deux joueurs s’affrontent pour aligner quatre de leurs jetons.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/connect4-game",
    },
    {
      id: 4,
      frontImage: Maquette,
      title: "Maquette",
      description: "Ce projet consiste en la création d’une maquette interactive d’une application ou d’un site web en se basant sur une inspiration donnée.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/maquette-project",
    },
    {
      id: 5,
      frontImage: Responsive,
      title: "Responsive",
      description: "Ce projet met en œuvre les principes de conception responsive afin que l’application ou le site Web s’adapte parfaitement à différentes tailles d’écrans et dispositifs.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/responsive-project",
    },
    {
      id: 6,
      frontImage: Cinema,
      title: "MyCinema",
      description: "MyCinema est une application qui permet à l’utilisateur de consulter des informations sur des films et des séries en utilisant une base de données alimentée par SQL.",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/mycinema",
    },
];

export { services, experiences, projects };
