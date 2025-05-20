import HomeAbout from "@/components/modules/home/about/About";
import FeaturedBlogs from "@/components/modules/home/blogs/FeaturedBlogs";
import Contact from "@/components/modules/home/contact/Contact";
import FeaturedProjects from "@/components/modules/home/projects/FeaturedProjects";
import SkillsSection from "@/components/modules/home/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HomeAbout />
      <SkillsSection />
      <FeaturedProjects />
      <FeaturedBlogs />
      <Contact />
    </>
  );
}
