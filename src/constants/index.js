import tools from '/assets/settings.png'
import darty from '/assets/darty.png'
import mcdonald from '/assets/mcdonalds.png';
import franceSecours from '/assets/franceSecours.png';


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
]

const experiences = [
   {
      title: "Stagiare",
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
]

export {services, experiences};