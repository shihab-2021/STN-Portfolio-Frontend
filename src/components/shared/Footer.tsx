import { FaFacebookF, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row items-center justify-between relative font-sansita mt-5">
      <p className="font-sansita text-[var(--primaryColor1)] py-2">
        <span className="font-oleo_script">Shihab</span> © 2025 | All Rights
        Reserved
      </p>
      <div className="pl-1 py-4 flex gap-4">
        <a
          className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-[Arima] text-[var(--primaryColor2)] font-semibold"
          href="https://www.facebook.com/shajibulalam.shihab/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-[Arima] text-[var(--primaryColor2)] font-semibold"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/shajibul-alam-shihab/"
        >
          <FaLinkedin />
        </a>
        <a
          className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-[Arima] text-[var(--primaryColor2)] font-semibold"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/shihab-2021"
        >
          <FaGithub />
        </a>
        <a
          className="bg-[url('/assets/blur_bg.png')] p-2 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex flex-col gap-1 xl:gap-2 items-center justify-center font-[Arima] text-[var(--primaryColor2)] font-semibold"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/shihab-2021"
        >
          <FaDiscord />
        </a>
      </div>
    </footer>
  );
}
