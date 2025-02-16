import { CursorWrapper } from "@/components/StickyCursor/StickyCursorWrapper/stickyCursorWrapper";
import { HeroSection } from "./(Sections)/Hero/HeroSection";
import ProjectSection from "./(Sections)/Project/ProjectSection";
import AboutSection from "./(Sections)/About/AboutSection";
import ContactSection from "./(Sections)/Contact/ContactSection";
import Navbar from "@/components/UI/Navigation/Navbar";

export default function Home() {
  return (
    <CursorWrapper>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center gap-y-16 text-AAprimary z-10">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>
    </CursorWrapper>
  );
}
