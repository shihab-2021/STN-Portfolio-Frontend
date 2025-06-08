"use client";
import { useEffect, useState } from "react";
// import "./Blogs.css";
import BlogCard from "./BlogCard";
import SectionTitle from "@/components/shared/SectionTitle";
import Loading from "@/components/shared/Loading";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const repoData = await fetch(
          `https://dev.to/api/articles?username=shajibul_alam_shihab`
        );
        if (!repoData.ok) {
          throw new Error("Failed to fetch repository data");
        }
        const repositoryData = await repoData?.json();
        setBlogs(repositoryData);
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="blogs" className="pt-14 mt-14">
      <div>
        <SectionTitle title="Blogs" />
        <div>
          {isLoading && (
            <div
              style={{ height: "30vh" }}
              className="flex justify-center items-center"
            >
              <Loading />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {!isLoading &&
              blogs
                ?.slice(0, 6)
                ?.map((blog, index) => (
                  <BlogCard key={index} blog={blog} index={index} />
                ))}
          </div>
        </div>
        <div className="text-center font-sansita my-5">
          <Link
            href="/blogs"
            className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
