/* eslint-disable @typescript-eslint/no-explicit-any */
import markdownComponents from "@/components/shared/markdownComponents";
import Image from "next/image";
import { FaHeart, FaComments } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function PremiumBlogDetails({
  blogData,
  blogContent,
}: {
  blogData: any;
  blogContent: any;
}) {
  return (
    <article className="relative rounded-lg lg:rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden bg-[#ffffff78] backdrop-blur font-sansita transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] mb-10">
      {/* Article Header */}
      <div className="relative h-fit bg-gradient-to-r from-[var(--primaryColor1)] via-[var(--primaryColor3)] to-[var(--primaryColor2)]  overflow-hidden">
        {/* Content Container */}
        <div className="relative inset-0 px-2 py-4 sm:py-8 sm:px-4 flex flex-col justify-end space-y-6">
          {/* Title & Meta */}
          <div className="space-y-4 sm:space-y-6">
            {/* Category & Reading Time */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 text-blue-600 text-xs sm:text-sm font-medium shadow">
                {blogData?.category || "Technology"}
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 text-blue-600 text-xs sm:text-sm font-medium shadow">
                {blogData?.reading_time_minutes || "5"} min read
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug sm:leading-tight hover:underline">
              <a href={blogData?.canonical_url} target="_blank">
                {blogData?.title || "Your Blog Title Here"}
              </a>
            </h1>

            {/* Author & Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    width={100}
                    height={100}
                    src={blogData?.user?.profile_image || "/default-avatar.jpg"}
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm sm:text-base">
                    {blogData?.user?.name || "Anonymous"}
                  </span>
                  <span className="text-white/90 text-xs sm:text-sm">
                    {new Date(
                      blogData?.published_at || Date.now()
                    ).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="flex items-center space-x-2 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {blogData?.public_reactions_count || 0}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
                  <FaComments className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {blogData?.comments_count || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-purple-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-tr-full opacity-50"></div>

      {/* Article Content */}
      <div className="relative p-2 sm:p-4">
        <div className="prose prose-blue max-w-none">
          <ReactMarkdown components={markdownComponents}>
            {blogContent}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {blogData?.tags && (
          <div className="mt-10">
            <div className="flex flex-wrap gap-2">
              {blogData?.tags?.map((tag: any, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer shadow"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Article Footer */}
        <div className="mt-12 pt-6 border-t border-gray-300">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 mb-2">
              Last updated:{" "}
              {new Date(blogData?.edited_at || Date.now()).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </div>
            {/* <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors duration-300">
                Previous Article
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300">
                Next Article
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
}
