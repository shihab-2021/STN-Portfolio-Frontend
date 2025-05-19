import SectionTitle from "@/components/shared/SectionTitle";
import {
  FaJs,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaComments,
  FaUsers,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import { MdSelfImprovement } from "react-icons/md";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiBootstrap,
  SiPrisma,
  SiNextdotjs,
  SiFirebase,
  SiShadcnui,
  SiMongoose,
  SiJsonwebtokens,
  SiMui,
} from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNode className="text-green-600" /> },
    { name: "Express.js", icon: <FaNode className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "ShadcnUI", icon: <SiShadcnui className="text-gray-900" /> },
    { name: "MaterialUI", icon: <SiMui className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  const softSkills = [
    { name: "Communication", icon: <FaComments className="text-blue-400" /> },
    { name: "Teamwork", icon: <FaUsers className="text-pink-500" /> },
    {
      name: "Problem-Solving",
      icon: <FaLightbulb className="text-yellow-400" />,
    },
    { name: "Time Management", icon: <FaClock className="text-indigo-500" /> },
    {
      name: "Self-Discipline",
      icon: <MdSelfImprovement className="text-red-500" />,
    },
    {
      name: "Adaptability",
      icon: <LuBicepsFlexed className="text-amber-900" />,
    },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="mb-12">
        <SectionTitle title="Skills" />
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg bg-white transition-transform hover:-translate-y-1"
            >
              <span className="text-xl">{skill.icon}</span>
              <p className="font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Soft Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg bg-white transition-transform hover:-translate-y-1"
            >
              <span className="text-xl">{skill.icon}</span>
              <p className="font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
