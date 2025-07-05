import { FaCodeCommit, FaGithub, FaUsers } from "react-icons/fa6";
import {
  FaLink,
  FaStar,
  FaCodeBranch,
  FaCalendarAlt,
  FaCode,
  FaEye,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import markdownComponents from "@/components/shared/markdownComponents";
import getSingleGitProject from "@/apis/getSingleGitProject";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const data = await getSingleGitProject(projectName);

  return (
    <>
      <div className="prose font-sansita min-w-full mx-auto space-y-6 ">
        {/* Project Overview */}
        <div className="py-4">
          {/* Project Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor1)] to-[var(--primaryColor2)] capitalize mb-0">
              {data?.projectDetails?.name?.replace(/-/g, " ")}
            </h1>
            <div className="flex space-x-4">
              <a
                href={data?.projectDetails?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-all transform hover:scale-110 hover:rotate-6"
              >
                <FaGithub className="text-xl md:text-2xl lg:text-3xl" />
              </a>
              {data?.projectDetails?.homepage && (
                <a
                  href={data?.projectDetails?.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 transition-all transform hover:scale-110 hover:rotate-6"
                >
                  <FaLink className="text-xl md:text-2xl lg:text-3xl" />
                </a>
              )}
            </div>
          </div>

          {/* Project Description */}
          <p className="text-gray-700 mb-6 text-sm md:text-base lg:text-lg bg-white/60 p-3 md:p-4 rounded-xl shadow-md ">
            {data?.projectDetails?.description || "No description available"}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: <FaStar className="text-yellow-500" />,
                count: data?.projectDetails?.stargazers_count,
                label: "Stars",
                bgClass: "bg-yellow-50 hover:bg-yellow-100",
              },
              {
                icon: <FaCodeBranch className="text-green-500" />,
                count: data?.projectDetails?.forks_count,
                label: "Forks",
                bgClass: "bg-green-50 hover:bg-green-100",
              },
              {
                icon: <MdLanguage className="text-purple-500" />,
                count: data?.projectDetails?.language,
                label: "Language",
                bgClass: "bg-purple-50 hover:bg-purple-100",
              },
              {
                icon: <FaCodeCommit className="text-indigo-500" />,
                count: data?.additionalStats.totalCommits,
                label: "Commits",
                bgClass: "bg-indigo-50 hover:bg-indigo-100",
              },
              {
                icon: <FaUsers className="text-teal-500" />,
                count: data?.additionalStats.totalContributors,
                label: "Contributors",
                bgClass: "bg-teal-50 hover:bg-teal-100",
              },
              {
                icon: <FaEye className="text-blue-500" />,
                count: data?.projectDetails?.watchers_count,
                label: "Watchers",
                bgClass: "bg-blue-50 hover:bg-blue-100",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgClass} p-4 rounded-xl flex items-center space-x-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                {stat.icon}
                <div>
                  <div className="font-bold text-sm md:text-lg">
                    {stat.count}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Technologies */}
          {data?.projectDetails?.topics && data?.projectDetails?.topics[0] && (
            <div className="mb-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor1)] to-[var(--primaryColor2)]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {data?.projectDetails?.topics?.map((topic: string) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-white/60 text-blue-800 rounded-full text-xs md:text-sm shadow-md hover:bg-blue-100 transition-all transform hover:scale-105"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Project Info */}
          <div className="bg-white/60 p-4 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2  gap-4">
            <div className="flex items-center space-x-3">
              <FaCalendarAlt className="text-gray-500" />
              <span className="text-xs md:text-sm">
                Created:{" "}
                {data?.projectDetails &&
                  new Date(data?.projectDetails?.created_at).toDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCalendarAlt className="text-gray-500" />
              <span className="text-xs md:text-sm">
                Last Updated:{" "}
                {data?.projectDetails &&
                  new Date(data?.projectDetails?.updated_at).toDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCode className="text-gray-500" />
              <span className="text-xs md:text-sm">
                Default Branch: {data?.projectDetails?.default_branch}
              </span>
            </div>
          </div>
        </div>

        {/* README Section */}
        <div className="">
          <ReactMarkdown components={markdownComponents}>
            {data?.readmeContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
