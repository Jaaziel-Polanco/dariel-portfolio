import React from "react";
import { IoLogoPython } from "react-icons/io";
import { FaMicrosoft, FaDatabase, FaLightbulb, FaUsers, FaComments, FaClock, FaHandshake, FaBrain } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { TbDatabaseCog } from "react-icons/tb";
import { MdOutlineQueryStats } from "react-icons/md";

const skills = [
  { name: "Python", icon: <IoLogoPython /> },
  { name: "Excel", icon: <FaMicrosoft /> },
  { name: "Power BI", icon: <SiPowerbi /> },
  { name: "SQL Server", icon: <FaDatabase /> },
  { name: "Power Query", icon: <MdOutlineQueryStats /> },
  { name: "Big Data", icon: <TbDatabaseCog /> },
];

const softSkills = [
  { name: "Problem Solving", icon: <FaLightbulb /> },
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Communication", icon: <FaComments /> },
  { name: "Critical Thinking", icon: <FaBrain /> },
  { name: "Time Management", icon: <FaClock /> },
  { name: "Collaboration", icon: <FaHandshake /> },
];


const Skills = () => {
  return (
    <div id="skills" className="container mx-auto mt-16 p-6">
      {/* Heading */}
      <div className="relative mb-10 text-center">
        <h3 className="text-3xl font-black text-gray-700 sm:text-2xl">My Skills</h3>
        <span className="h-[2px] w-[80px] bg-gray-400 block mx-auto mt-2"></span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-32 h-32 hover:shadow-lg transition">
            <div className="text-4xl text-blue-600">{skill.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="relative mt-16 text-center">
        <h3 className="text-2xl font-black text-gray-700">Soft Skills</h3>
        <span className="h-[2px] w-[60px] bg-gray-400 block mx-auto mt-2"></span>
      </div>

      {/* Soft Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-items-center mt-6">
        {softSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-32 h-32 hover:shadow-lg transition">
            <div className="text-4xl text-yellow-500">{skill.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
