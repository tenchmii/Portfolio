import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#171a36",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[50%] h-[50%] object-contain" // Reduced size for responsiveness
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] sm:text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[14px] sm:text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-3 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative w-full h-full  text-white mb-10 sm:mb-20">
      <div className="absolute top-1 sm:top-10 left-5 sm:left-20 z-10 lg:top-0">
        <Link to="/hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 sm:w-8 h-6 sm:h-8 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </Link>
      </div>

      <motion.div variants={textVariant()} className="text-center mt-8 sm:mt-10">
        <p className="text-[14px] sm:text-[16px] text-secondary uppercase tracking-wide text-white">
          Ce que j'ai fait jusqu'à présent
        </p>
        <h2 className="font-black text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white">
          Expériences professionnelles
        </h2>
      </motion.div>

      <div className="mt-12 sm:mt-20 flex flex-col px-4 sm:px-8">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
