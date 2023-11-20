import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />   
      </div>
      <Footer />
    </main>
  );
}
