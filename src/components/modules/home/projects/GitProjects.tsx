"use client";
import Loading from "@/components/shared/Loading";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { FaCodeFork, FaRegStar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { colors } from "./GitColors";

interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

interface WindowSize {
  width: number;
  height: number;
}

export default function GitProjects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/search/repositories?q=user:shihab-2021+fork:false&sort=stars&per_page=20&type=Repositories`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data = await res.json();

        const sortedProjects: GitHubProject[] = data.items.sort(
          (a: GitHubProject, b: GitHubProject) => {
            if (b.stargazers_count === a.stargazers_count) {
              return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
              );
            }
            return b.stargazers_count - a.stargazers_count;
          }
        );

        setProjects(sortedProjects);
      } catch (err) {
        console.error((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="projects" className="pt-14">
      <div>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {projects.slice(0, 6).map((project) => {
            return (
              <Link
                key={project.id}
                href={`/project/${project.name}`}
                className="rounded-lg h-fit cursor-pointer transition-all duration-300 relative bg-[url('/assets/blur_bg.png')] backdrop-blur shadow-md hover:shadow-xl group"
              >
                <div className="p-2 h-[270px] flex flex-col justify-between font-sansita">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <p className="text-lg md:text-xl font-semibold text-sky-900 capitalize line-clamp-2 group-hover:text-sky-700 transition-colors">
                        {project.name.replaceAll("-", " ")}
                      </p>
                    </div>
                    <p className="line-clamp-2 text-slate-500 mt-2 text-sm">
                      {project.description ?? "Description not added!"}
                    </p>
                  </div>
                  <div className="mb-0.5 text-sm text-slate-500">
                    {project.topics.length === 0 ? (
                      "Topics not added!"
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {project.topics.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[var(--primaryColor3)] text-[var(--primaryColor4)] px-2 py-0.5 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="flex items-center gap-2 mb-1 text-[var(--primaryColor1)]">
                    <MdOutlineDateRange className="text-green-600" />
                    <span>{new Date(project.created_at).toDateString()}</span>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6 text-[var(--primaryColor1)]">
                      <p className="flex items-center gap-2">
                        <FaRegStar className="text-green-600" />
                        <span>{project.stargazers_count}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaCodeFork className="text-green-600" />
                        <span>{project.forks_count}</span>
                      </p>
                    </div>
                    <p className="flex items-center gap-2">
                      <span
                        style={{
                          backgroundColor: colors[project.language] || "gray",
                        }}
                        className="w-3 h-3 rounded-full transition-transform group-hover:scale-110"
                      ></span>
                      <span className="text-[var(--primaryColor1)] text-sm">
                        {project.language}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {isLoading && (
          <div
            style={{ height: "30vh" }}
            className="flex justify-center items-center"
          >
            <Loading />
          </div>
        )}

        <div className="text-center font-sansita my-5">
          <Link
            href="/projects"
            className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <div className="pt-14">
        <div className="flex items-center mb-10">
          <h1 className="text-3xl font-sansita underline text-[var(--primaryColor2)]">
            Github Activity
          </h1>
        </div>
        <div className="font-sansita px-2 flex items-center justify-center w-full">
          <GitHubCalendar
            username="shihab-2021"
            blockSize={windowSize.width > 768 ? 10 : 9}
            colorScheme="light"
            fontSize={windowSize.width > 768 ? 18 : 11}
          />
        </div>
      </div>
    </div>
  );
}
