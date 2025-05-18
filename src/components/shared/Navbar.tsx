"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaEnvelope,
  FaInfo,
  FaBlog,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const navLinks = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "about", icon: FaInfo, text: "About", path: "/about" },
  {
    id: "blogs",
    icon: FaBlog,
    text: "Blogs",
    path: "/blogs",
  },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  //   { id: "dashboard", icon: MdDashboard, text: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  const openMobileView = () => {
    setMobileView(true);
  };
  const closeMobileView = () => {
    setMobileView(false);
  };

  return (
    <>
      <header className="sticky top-0 px-0 py-1 mx-auto z-10 w-full">
        <div className="relative">
          <div
            className="rounded-lg border border-transparent animate-border-gradient bg-[url('/assets/blur_bg.png')]
        shadow-lg backdrop-blur"
          >
            <div className="font-sansita rounded-lg">
              <nav className="text-white w-full flex relative justify-between items-center mx-auto px-4 py-2">
                <div className="inline-flex">
                  <Link href={"/"} className="_o6689fn">
                    <span className="font-oleo_script text-2xl text-[var(--primaryColor1)]">
                      Shihab
                    </span>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                      <div className="block">
                        <div className="inline relative">
                          <div className="flex flex-row-reverse items-center gap-4">
                            {!mobileView ? (
                              <button
                                className="text-[var(--primaryColor1)] font-bold text-xl cursor-pointer"
                                onClick={() => {
                                  openMobileView();
                                }}
                              >
                                <HiMenuAlt3 />
                              </button>
                            ) : (
                              <button
                                className="text-[var(--primaryColor1)] font-bold text-xl cursor-pointer"
                                onClick={() => {
                                  closeMobileView();
                                }}
                              >
                                <RxCross2 />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <style>{`
         @keyframes border-gradient {
           0% {
             border-color: #5eead4; /* emerald */
           }
           33% {
             border-color: #38bdf8; /* cyan */
           }
           66% {
             border-color: #818cf8; /* indigo */
           }
           100% {
             border-color: #5eead4; /* emerald */
           }
         }
         .animate-border-gradient {
           animation: border-gradient 3s linear infinite;
         }
       `}</style>
          <div
            className={`absolute top-14 right-0 max-w-full rounded-lg border border-transparent animate-border-gradient bg-[url('/assets/blur_bg.png')] backdrop-blur shadow-2xl z-50 transition-all duration-300 ${
              mobileView
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <nav className="p-4">
              <ul className="space-y-2">
                {navLinks.map((link) => {
                  //   const isActive = activePath === link.path;
                  return (
                    <li key={link.id}>
                      <Link
                        href={link.path}
                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-[var(--primaryColor2)] hover:text-white hover:bg-slate-700/50
                    `}
                        // onClick={() => {
                        //   setActivePath(link.path);
                        //   toggleMobileView();
                        // }}
                      >
                        <link.icon className={`h-5 w-5 mr-3 `} />
                        <span className="font-medium">{link.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
