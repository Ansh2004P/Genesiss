import { Index } from "@/components/Images/HeroBackground";
import HeroArea from "@/components/UI/HeroArea/HeroArea";
import Brief from "@/components/UI/HeroArea/Brief/Brief";
import HeadingComponent from "@/components/UI/HeroArea/Navbar/HeadingComponent";

export function HeroSection() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-between w-screen h-screen z-10">
            <HeadingComponent />
            <HeroArea />
            <Brief />
            <Index />
        </section>
    );
}