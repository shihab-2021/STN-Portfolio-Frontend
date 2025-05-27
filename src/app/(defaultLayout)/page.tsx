import HomeAbout from "@/components/modules/home/about/About";
import FeaturedBlogs from "@/components/modules/home/blogs/FeaturedBlogs";
import Contact from "@/components/modules/home/contact/Contact";
import FeaturedProjects from "@/components/modules/home/projects/FeaturedProjects";
import GitProjects from "@/components/modules/home/projects/GitProjects";
import SkillsSection from "@/components/modules/home/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HomeAbout />
      <SkillsSection />
      <FeaturedProjects />
      <GitProjects />
      <FeaturedBlogs />
      <Contact />
    </>
  );
}
