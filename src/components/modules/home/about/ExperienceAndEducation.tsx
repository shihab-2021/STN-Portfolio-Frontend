// import {
//   FaAward,
//   FaBriefcase,
//   FaBuilding,
//   FaCalendar,
//   FaChevronRight,
//   FaGraduationCap,
//   FaLocationDot,
// } from "react-icons/fa6";
// import { IconType } from "react-icons";
// import SectionTitle from "@/components/shared/SectionTitle";

// interface ExperienceItem {
//   role: string;
//   company: string;
//   period: string;
//   location: string;
//   description: string;
//   achievements: string[];
//   technologies: string[];
// }

// interface EducationItem {
//   degree: string;
//   school: string;
//   period: string;
//   description: string;
//   achievements: string[];
// }

// type TimelineItemProps = {
//   title: string;
//   subtitle: string;
//   period: string;
//   description: string;
//   achievements?: string[];
//   location?: string;
//   icon: IconType;
//   showConnectingLine: boolean;
// };

// export default function ExperienceAndEducation() {
//   const experiences: ExperienceItem[] = [
//     {
//       role: "Full Stack Developer(Remote)",
//       company: "Experiment Labs",
//       period: "Jun 2023 - Sep 2024",
//       location: "Delhi, India",
//       description:
//         "Built dashboards, course management tools, and reporting features while implementing secure user authentication and integrating with LMS platforms.",
//       achievements: [
//         "Developed user dashboards and course management tools using React and Node.js",
//         "Implemented secure user authentication with role-based access control",
//         "Optimized performance through database query improvements and caching",
//         "Provided client support for issue resolution and feature guidance",
//       ],
//       technologies: [
//         "React",
//         "Tailwind CSS",
//         "Material UI",
//         "Firebase",
//         "MongoDB",
//         "Node Express",
//       ],
//     },
//     {
//       role: "Frontend Developer(Remote)",
//       company: "HashCode",
//       period: "Apr 2023 - May 2023",
//       location: "Bangladesh",
//       description:
//         "Contributed to frontend development projects, improving UI/UX and enhancing the performance of web applications and native applications.",
//       achievements: [
//         "Developed responsive and user-friendly interfaces",
//         "Collaborated with cross-functional teams for feature implementation",
//         "Optimized frontend performance for improved user experience",
//       ],
//       technologies: ["HTML", "CSS", "JavaScript", "React"],
//     },
//   ];

//   const education: EducationItem[] = [
//     {
//       degree: "Bachelor of Science (BSc), Computer Science and Engineering",
//       school: "International Islamic University Chittagong",
//       period: "Nov 2019 - Jan 2024",
//       description:
//         "Focused on software development, algorithms, and system design with hands-on experience in full-stack development and data structures.",
//       achievements: [
//         "Graduated with academic distinction",
//         "Led multiple academic projects and tech competitions",
//         "Active member of university coding club",
//       ],
//     },
//     {
//       degree: "Higher Secondary Certificate (HSC) in Science",
//       school: "Cambrian School & College",
//       period: "2017 - 2019",
//       description:
//         "Specialized in Science subjects with a focus on Mathematics, Physics, Chemistry, Biology and ICT.",
//       achievements: [
//         "Graduated with Distinction",
//         "Member of Science Club",
//         "Participated in Regional Science Olympiads",
//       ],
//     },
//   ];

//   const TimelineItem: React.FC<TimelineItemProps> = ({
//     title,
//     subtitle,
//     period,
//     description,
//     achievements,
//     location,
//     icon: Icon,
//     showConnectingLine,
//   }) => {
//     return (
//       <div className="group relative pl-10 sm:pl-12 pb-4 last:pb-0">
//         {showConnectingLine && (
//           <div className="absolute left-[20px] top-8 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 group-hover:opacity-100 transition-all duration-500" />
//         )}
//         <div className="absolute left-[20px] top-4 h-[2px] w-[50%] bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 group-hover:opacity-100 transition-all duration-500" />

//         <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
//           <Icon
//             size={16}
//             className="transition-transform duration-300 group-hover:rotate-12"
//           />
//         </div>

//         <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-[#ffffff78] backdrop-blur p-4 sm:p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
//           <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-16 translate-x-16" />
//           <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full translate-y-16 -translate-x-16" />

//           <div className="relative">
//             <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-800 tracking-tight">
//                 {title}
//               </h3>
//               <span className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
//                 <FaCalendar size={14} className="mr-2 -mt-[3px]" />
//                 {period}
//               </span>
//             </div>
//             <div className="flex flex-wrap gap-2 items-center justify-between">
//               <div className="flex items-center mb-3">
//                 <FaBuilding
//                   size={16}
//                   className="text-blue-500 mr-2 -mt-[3px]"
//                 />
//                 <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
//                   {subtitle}
//                 </p>
//               </div>
//               {location && (
//                 <div className="flex items-center mb-3">
//                   <FaLocationDot
//                     size={16}
//                     className="text-gray-500 mr-2 -mt-[3px]"
//                   />
//                   <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-500">
//                     {location}
//                   </p>
//                 </div>
//               )}
//             </div>
//             <p className="text-gray-600 mb-4">{description}</p>

//             {/* {achievements && achievements.length > 0 && (
//               <div className="space-y-2">
//                 <h4 className="text-sm font-semibold text-gray-700 flex items-center">
//                   <FaAward
//                     size={14}
//                     className="mr-2 text-purple-500 -mt-[3px]"
//                   />
//                   Key Achievements
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {achievements.map((achievement, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2 shadow-sm"
//                     >
//                       <FaChevronRight
//                         size={14}
//                         className="text-blue-500 mr-2"
//                       />
//                       {achievement}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )} */}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className="space-y-8">
//         <div className="my-12">
//           <SectionTitle title="Education" />
//         </div>
//         {education.map((edu, index) => (
//           <TimelineItem
//             key={index}
//             title={edu.degree}
//             subtitle={edu.school}
//             period={edu.period}
//             description={edu.description}
//             achievements={edu.achievements}
//             icon={FaGraduationCap}
//             showConnectingLine={index < education.length - 1}
//           />
//         ))}

//         <div className="my-12">
//           <SectionTitle title="Experience" />
//         </div>
//         {experiences.map((exp, index) => (
//           <TimelineItem
//             key={index}
//             title={exp.role}
//             subtitle={exp.company}
//             period={exp.period}
//             description={exp.description}
//             achievements={exp.achievements}
//             location={exp.location}
//             icon={FaBriefcase}
//             showConnectingLine={index < experiences.length - 1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import {
  FaAward,
  FaBriefcase,
  FaBuilding,
  FaCalendar,
  FaChevronRight,
  FaGraduationCap,
  FaLocationDot,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import SectionTitle from "@/components/shared/SectionTitle";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
  achievements: string[];
}

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements?: string[];
  location?: string;
  icon: IconType;
  showConnectingLine: boolean;
};

export default function ExperienceAndEducation() {
  const experiences: ExperienceItem[] = [
    {
      role: "Full Stack Developer(Remote)",
      company: "Experiment Labs",
      period: "Jun 2023 - Sep 2024",
      location: "Delhi, India",
      description:
        "Built dashboards, course management tools, and reporting features while implementing secure user authentication and integrating with LMS platforms.",
      achievements: [
        "Developed user dashboards and course management tools using React and Node.js",
        "Implemented secure user authentication with role-based access control",
        "Optimized performance through database query improvements and caching",
        "Provided client support for issue resolution and feature guidance",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Material UI",
        "Firebase",
        "MongoDB",
        "Node Express",
      ],
    },
    {
      role: "Frontend Developer(Remote)",
      company: "HashCode",
      period: "Apr 2023 - May 2023",
      location: "Bangladesh",
      description:
        "Contributed to frontend development projects, improving UI/UX and enhancing the performance of web applications and native applications.",
      achievements: [
        "Developed responsive and user-friendly interfaces",
        "Collaborated with cross-functional teams for feature implementation",
        "Optimized frontend performance for improved user experience",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science (BSc), Computer Science and Engineering",
      school: "International Islamic University Chittagong",
      period: "Nov 2019 - Jan 2024",
      description:
        "Focused on software development, algorithms, and system design with hands-on experience in full-stack development and data structures.",
      achievements: [
        "Graduated with academic distinction",
        "Led multiple academic projects and tech competitions",
        "Active member of university coding club",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Science",
      school: "Cambrian School & College",
      period: "2017 - 2019",
      description:
        "Specialized in Science subjects with a focus on Mathematics, Physics, Chemistry, Biology and ICT.",
      achievements: [
        "Graduated with Distinction",
        "Member of Science Club",
        "Participated in Regional Science Olympiads",
      ],
    },
  ];

  const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    subtitle,
    period,
    description,
    achievements,
    location,
    icon: Icon,
    showConnectingLine,
  }) => {
    return (
      <div className="group relative pl-10 sm:pl-12 pb-4 last:pb-0">
        {showConnectingLine && (
          <div className="absolute left-[20px] top-8 h-full w-[2px] bg-gradient-to-b from-[var(--primaryColor1)] to-[var(--primaryColor3)] opacity-20 group-hover:opacity-100 transition-all duration-500" />
        )}
        <div className="absolute left-[20px] top-4 h-[2px] w-[50%] bg-gradient-to-b from-[var(--primaryColor1)] to-[var(--primaryColor1)] opacity-20 group-hover:opacity-100 transition-all duration-500" />

        <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primaryColor1)] to-[var(--primaryColor3)] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon
            size={16}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-[#ffffff78] backdrop-blur p-4 sm:p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full translate-y-16 -translate-x-16" />

          <div className="relative">
            <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                {title}
              </h3>
              <span className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                <FaCalendar size={14} className="mr-2 -mt-[3px]" />
                {period}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex items-center mb-3">
                <FaBuilding
                  size={16}
                  className="text-[var(--primaryColor1)] mr-2 -mt-[3px]"
                />
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor1)] to-[var(--primaryColor2)]">
                  {subtitle}
                </p>
              </div>
              {location && (
                <div className="flex items-center mb-3">
                  <FaLocationDot
                    size={16}
                    className="text-gray-500 mr-2 -mt-[3px]"
                  />
                  <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-500">
                    {location}
                  </p>
                </div>
              )}
            </div>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* {achievements && achievements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                    <FaAward
                      size={14}
                      className="mr-2 text-purple-500 -mt-[3px]"
                    />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2 shadow-sm"
                      >
                        <FaChevronRight
                          size={14}
                          className="text-blue-500 mr-2"
                        />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="space-y-8">
        <div className="my-12">
          <SectionTitle title="Education" />
        </div>
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            subtitle={edu.school}
            period={edu.period}
            description={edu.description}
            achievements={edu.achievements}
            icon={FaGraduationCap}
            showConnectingLine={index < education.length - 1}
          />
        ))}

        <div className="my-12">
          <SectionTitle title="Experience" />
        </div>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.role}
            subtitle={exp.company}
            period={exp.period}
            description={exp.description}
            achievements={exp.achievements}
            location={exp.location}
            icon={FaBriefcase}
            showConnectingLine={index < experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
