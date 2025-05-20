"use client";
import Loading from "@/components/shared/Loading";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetAllProjectQuery } from "@/redux/features/project/projectApi";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface ProjectData {
  _id: string;
  title: string;
  image: string;
  live_link: string;
  git_client: string;
  git_server: string;
  category: string;
  summary: string;
  documentation: string;
  tags: string[];
}

export default function FeaturedProjects() {
  const { data: projects, isLoading } = useGetAllProjectQuery({
    refetchOnReconnect: true,
  });
  return (
    <div id="featured-projects" className="pt-14">
      <div>
        <SectionTitle title="Featured Projects" />
        {isLoading && (
          <div className="flex items-center justify-center py-10 h-52">
            <Loading />
          </div>
        )}
        <div className="py-7">
          <div className="relative">
            {/* Vertical dividing line - hidden on small screens */}
            <div className="absolute left-1/2 top-[5%] h-[90%] bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block" />

            {/* Projects */}
            <div className="space-y-12 md:space-y-24">
              {projects?.data?.map((project: ProjectData, index: number) => (
                <div key={index} className="relative">
                  {/* Project container */}
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center`}
                  >
                    {/* Image side */}
                    <div
                      className={`w-full md:w-1/2 group ${
                        index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                      }`}
                    >
                      <div className="overflow-hidden rounded-t-lg md:rounded-lg shadow-lg relative">
                        <Image
                          height={300}
                          width={300}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Link
                          href={`/projectDetails/${project?._id}`}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        >
                          <span className="text-white font-medium">
                            View Details
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Info card side */}
                    <div
                      className={`w-full md:w-1/2 ${
                        index % 2 === 0 ? "md:pl-4" : "md:pr-4"
                      }`}
                    >
                      <div className="bg-white rounded-b-lg md:rounded-lg shadow-lg border border-[var(--primaryColor4)] p-4 md:p-6 h-full">
                        <div className="mb-2">
                          <span className="inline-block px-2 md:px-3 py-1 text-xs md:text-sm font-semibold bg-blue-100 text-blue-800 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <Link
                          href={`/projectDetails/${project?._id}`}
                          className="text-xl md:text-2xl font-bold mb-2"
                        >
                          {project.title}
                        </Link>
                        <p className="text-gray-600 mt-2 mb-4 text-sm md:text-base">
                          {project.summary}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 md:gap-2 ">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        {/* <div className="flex flex-wrap gap-2 md:gap-3">
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.git_client}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                          >
                            Frontend
                          </a>
                          <a
                            href={project.git_server}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                          >
                            Backend
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - hidden on small screens */}
                  <div className="absolute left-1/2 top-1/2 w-3 h-3 md:w-6 md:h-6 bg-gradient-to-b from-[var(--primaryColor1)] to-[var(--primaryColor3)] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block text-white animate-bounce p-1">
                    {index % 2 === 0 ? <MdArrowForward /> : <MdArrowBack />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
