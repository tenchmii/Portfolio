import Portrait from "/assets/portrait.jpg";
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt className="w-[180px] sm:w-[200px] md:w-[220px]"
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      perspective={500}
      scale={1.05}
      transitionSpeed={2000}
      gyroscope={true}>
      <motion.div
        variants={fadeIn("horizontal", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full bg-gray-800 p-[1px] rounded-[15px]"
      >
        <div className="bg-tertiary rounded-[15px] py-5 px-10 min-h-[250px] flex flex-col justify-center items-center space-y-4">
          <h3 className="text-white text-[20px] font-semibold text-center">
            {title}
          </h3>
          <img
            src={icon}
            alt="service-icon"
            className="w-16 h-16 object-contain"
          />
        </div>
      </motion.div>
    </ParallaxTilt>
  )
};

const About = () => {
  return (
    <div className="w-full min-h-screen sm:h-full text-white mb-12 sm:mb-16">
      <div className="absolute top-4 sm:top-6 sm:left-10 z-10">
        <Link to="/hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
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
        <p className="mt-6 text-[14px] sm:text-[16px] text-secondary uppercase tracking-wide">
          Introduction
        </p>
        <h2 className="font-black text-[32px] sm:text-[40px] md:text-[50px]">
          Aperçu
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 flex flex-col md:flex-row items-center md:items-start justify-between">

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Portrait}
            alt="portrait"
            className="w-50 h-50 sm:w-60 sm:h-60 md:w-80 md:h-68 object-cover justify-end rounded-2xl"
          />
        </div>

        <div className="w-full md:w-1/2  md:text-left space-y-4">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
            En pleine formation avec Session 231 : Intégrateur - Développeur Web (RNCP31899) à Epitech by Web Academy, je cherche une alternance où je pourrai allier mes compétences techniques à des projets audacieux. Curieux, motivé et toujours à la recherche de nouveaux défis, je suis prêt à collaborer pour créer des expériences web innovantes et percutantes.
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start text-blue-600 gap-2">
            <a
              href="/assets/Tenzin-Chime.pdf"
              download
              className="text-[14px] sm:text-[16px] font-semibold transition duration-300 underline"
            >
              Télécharger mon CV
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </div>
  )
}

export default About;
