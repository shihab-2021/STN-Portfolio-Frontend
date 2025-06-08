import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";

export default function BlogCard({
  blog,
  index,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blog: any;
  index: number;
}) {
  const create_at = new Date(blog?.published_at);
  return (
    <Link
      href={`/blogDetails/${blog?.id}`}
      className="h-fit cursor-pointer transition-all duration-300 p-6 rounded-lg bg-[url('/assets/blur_bg.png')] backdrop-blur shadow-md hover:shadow-xl relative group  overflow-hidden font-sansita"
    >
      <div className="w-16 h-16 bg-[var(--primaryColor3)] rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-1 left-4 text-white text-lg">
          {index < 9 && "0"}
          {index + 1}
        </p>
      </div>
      <div className=" h-44 flex flex-col justify-between font-sansita">
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <p className="text-xl line-clamp-2 font-semibold capitalize text-sky-900">
              {/* {blog?.name?.replaceAll(".md", " ")} */}
              {blog?.title}
            </p>
          </div>
          <p className="line-clamp-3 text-slate-500 my-2 text-sm">
            {/* {lastCommitData?.commit?.message} */}
            {blog?.description}
          </p>
        </div>
        <p className="flex items-center gap-2 text-[var(--primaryColor1)] ">
          <MdOutlineDateRange className="text-green-600" />
          <span>{create_at.toDateString()}</span>
        </p>
      </div>
      <div className="absolute bottom-0 right-0 bg-[var(--primaryColor4)] p-2 rounded-tl-lg rounded-br-lg flex justify-center items-center transition-colors duration-700 group-hover:bg-[var(--primaryColor3)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15"
          width="15"
          className="transform transition-transform duration-200 group-hover:translate-x-1 fill-[var(--primaryColor3)] group-hover:fill-white"
        >
          <path
            // fill="var(--primaryColor2)"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          ></path>
        </svg>
      </div>
    </Link>
  );
}
