import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoPython } from "react-icons/io";
import { FaMicrosoft, FaDatabase } from "react-icons/fa";
import { SiPowerbi, SiMysql, SiPostgresql } from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        {/* Heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* Content */}
        <div className="flex md:flex-col">
          {/* Left Section */}
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className="text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoPython />} name={"Python"} value={60} />
                <ProgressBar
                  logo={<FaMicrosoft />}
                  name={"Excel"}
                  value={95}
                />
                <ProgressBar
                  logo={<SiPowerbi />}
                  name={"Power BI"}
                  value={88}
                />
                <ProgressBar
                  logo={<FaDatabase />}
                  name={"SQL Server"}
                  value={85}
                />
                <ProgressBar
                  logo={<SiMysql />}
                  name={"MySQL"}
                  value={70}
                />
                <ProgressBar
                  logo={<SiPostgresql />}
                  name={"PostgreSQL"}
                  value={70}
                />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaDatabase />}
                black={"white"}
                white={"black"}
                skill={"SQL Server"}
              />
              <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"MySQL"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiPowerbi />}
                black={"black"}
                white={"white"}
                skill={"Power BI"}
              />
              <SkillBox
                logo={<FaMicrosoft />}
                black={"black"}
                white={"white"}
                skill={"Excel"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
