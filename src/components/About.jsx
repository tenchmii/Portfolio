import Portrait from '/assets/portrait.jpg'
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt
      className="xs:w-[250px] w-[250px]"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={600}
      scale={1.05}
      transitionSpeed={2500}
      gyroscope={true}
    >
      <motion.div
        variants={fadeIn("horizontal", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full bg-gray-800 p-[1px] rounded-[20px]"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[20px] font-bold text-center">
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
  );
};

const About = () => {
  return (
    <>
      <div className="relative w-full h-full sm:h-screen text-white mb-20">
        <div className="absolute top-0 sm:top-10 left-5 sm:left-20 z-10 ">
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

        <motion.div variants={textVariant()}>
          <p className="mt-10 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wide text-center">
            Introduction
          </p>
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Aperçu
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">

            <div className="flex flex-col md:w-2/5">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              En pleine formation avec Session 231 : Intégrateur - Développeur Web (RNCP31899) à Epitech by Web Academy, je cherche une alternance où je pourrai allier mes compétences techniques à des projets audacieux. Curieux, motivé et toujours à la recherche de nouveaux défis, je suis prêt à collaborer pour créer des expériences web innovantes et percutantes.
              </p>
              <div className="mt-6 flex text-blue-600">
                <a href="../../public/assets/Tenzin Chime.pdf" download className="text-lg font-semibold transition duration-300 underline">
                  Download My CV
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-end">
              <img
                src={Portrait}
                alt="portrait"
                className="w-60 h-60 md:w-120 md:h-120 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex flex-wrap gap-6 md:gap-10 justify-center text-white">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
