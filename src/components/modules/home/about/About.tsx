import SectionTitle from "@/components/shared/SectionTitle";
import { FaFacebookF, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";
import GitInfo from "./GitInfo";
import ExperienceAndEducation from "./ExperienceAndEducation";

export default function HomeAbout() {
  return (
    <>
      {/* Primary Information Start */}
      <div className=" flex items-center gap-4 mt-5 lg:mt-10">
        <div className="pl-1 py-4 flex flex-col gap-4">
          <a
            className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-sansita text-[var(--primaryColor2)] font-semibold"
            href="https://www.facebook.com/shajibulalam.shihab/"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-sansita text-[var(--primaryColor2)] font-semibold"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/shajibul-alam-shihab/"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-sansita text-[var(--primaryColor2)] font-semibold"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/shihab-2021"
          >
            <FaGithub />
          </a>
          <a
            className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-sansita text-[var(--primaryColor2)] font-semibold"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/shihab-2021"
          >
            <FaDiscord />
          </a>
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-oleo_script text-[var(--primaryColor1)]">
            Shajibul Alam Shihab
          </h1>
          <h1 className="text-4xl md:text-6xl font-oleo_script text-[var(--primaryColor2)]">
            Web developer
          </h1>
          <div className="mt-8 flex gap-4 items-center font-sansita">
            <a
              className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
              href={
                "https://drive.google.com/file/d/1dTRru4nc_Ailyn_aLBlFy0TNBt64CNNb/view?usp=sharing"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="fill-current w-4 h-4 mr-2 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
      {/* Primary Information End */}
      {/* About section start */}
      <div id="about" className="pt-14 md:pt-[90px]">
        <SectionTitle title="About" />
        <p className="p-2 font-sansita text-[var(--primaryColor1)] font-medium leading-relaxed text-justify">
          Hi! I’m Shihab, a Fullstack Developer specializing in web development.
          I have strong expertise in React.js, Next.js, TypeScript, JavaScript,
          Node.js, and the MERN stack, with hands-on experience in building
          dynamic, full-featured web applications. I’m proficient in HTML, CSS,
          Tailwind CSS, shadcn/ui, and Bootstrap, and I work confidently with
          databases like MongoDB and PostgreSQL using Mongoose and Prisma. I’m
          also familiar with Firebase and NextAuth.js. Alongside my technical
          skills, I bring strong communication, problem-solving, and
          adaptability to every project I work on.
        </p>
        <GitInfo />
      </div>
      <ExperienceAndEducation />
      {/* About section end */}
      {/* Skills section start */}
      {/* <SkillsSection /> */}
      {/* Skills section end */}
    </>
  );
}
