import tools from '/assets/settings.png';
import mcdonald from '/assets/mcdonalds.png';
import franceSecours from '/assets/franceSecours.png';
import Twitter from '/assets/twitter.png';
import SnapChat from '/assets/Snapchat.png';
import Quiz from '/assets/Quiz.png'
import Spotify from '/assets/spotify.png'
import MyEvents from '/assets/My-events.png';
import ECommerce from '/assets/E-commerce.png';
import vivaTech from '/assets/viva.webp'

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
      date: "Dépuis 2025",
      points: [
         "Emballage et préparation de cadeaux pour des événements caritatifs.",
         "Service client et souci du détail pour une présentation soignée.",
         "Travail en équipe dans un environnement dynamique."
      ]
   },
   {
      title: "Bénévole",
      company_name: "Viva Tech",
      icon: vivaTech,
      iconBg: "#fff",
      date: "Juin 2025",
      points: [
         "Accueil et orientation des visiteurs lors de l'événement Viva Tech.",
         "Assistance aux exposants et gestion des flux de participants.",
         "Contribution à la réussite de l'événement par un service efficace et amical."
      ]
   }
];

const projects = [
   {
      id: 1,
      frontImage: Twitter,
      title: "Twitter - X",
      description: "Tweet Académie est un réseau social façon Twitter développé en PHP (HTML/CSS/JS), utilisant Ajax, une base de données relationnelle et un micro-framework CSS pour le responsive.",
      duree: "Durée : 1 mois",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/x-social-media",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 2,
      frontImage: SnapChat,
      title: "Snapchat",
      description: "my_snapchat est une application mobile récrée avec React Native qui permet d’envoyer des images temporaires à des contacts via l’API. Les snaps s’affichent pendant une durée choisie puis sont automatiquement supprimés, avec gestion des comptes.",
      duree: "Durée :  2 semains",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/yourusername/meetic-clone",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 3,
      frontImage: Quiz,
      title: "My Quiz",
      description: "my_quiz est un site de quiz de culture générale développé avec Symfony (PHP), utilisant Doctrine, Form Builder et Twig. Les utilisateurs peuvent jouer et suivre leur historique, tandis que les admins gèrent comptes, quiz et statistiques.",
      duree: "Durée : 1 semaine",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/tenchmii/Quizz",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 4,
      frontImage: Spotify,
      title: "Spotify",
      description: "Spotify est un lecteur multimédia en ligne développé avec React, consommant une API (Docker) et manipulant des JSON. Il propose listings et pages de détail pour albums, artistes et genres, une recherche paginée et un lecteur HTML5 (une piste à la fois).",
      duree: "Durée : 1 semaine",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/tenchmii/spotify",
      testerButton: "https://spotify-oqrb5s8wy-tenchmiis-projects.vercel.app/",
    },
    {
      id: 5,
      frontImage: MyEvents,
      title: "My Events",
      description: "Ce projet est une application web pour découvrir et organiser des événements culturels. Le front-end utilise Next.js et le back-end Django (Python) pour gérer utilisateurs et événements. Les utilisateurs peuvent consulter les événements et créer des sorties.",
      duree: "Durée : 2 semaines",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/tenchmii/My-events",
      testerButton: "https://github.com/yourusername/x-social-media",
    },
    {
      id: 6,
      frontImage: ECommerce,
      title: "E-commerce",
      description: "Ce projet est une boutique en ligne de matériel informatique, avec gestion des produits. Le front-end utilise React.js et le back-end Symfony (PHP). Les utilisateurs peuvent consulter les articles et passer des commandes, tandis que les administrateurs supervisent les produits et les promotions.",
      duree: "Durée : 2 semaines",
      backgroundColor: "bg-gray-900",
      repoLink: "https://github.com/tenchmii/E-commerce",
      testerButton: "https://e-commerce-eta-three-50.vercel.app",
    },
];

export { services, experiences, projects };
