"use client";
import { IconLink } from "@/components/ProjectLinkButton/ProjectLinkButton";
import Magnetic from "@/components/StickyCursor/Magnetic.tsx/magnetic";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            gsap.to(window, {
                duration: 0.2,
                scrollTo: { y: target, offsetY: 80 }, // Offset for fixed navbar
                ease: "power2.inOut",
            });
        }
    };

    return (
        <nav className="fixed bottom-14 left-0 right-0 z-50 my-0 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]">

            <IconLink 
                id="view-resume"
                style="py-1 px-1 text-[16px] sm:px-4 md:py-1" 
                color="white" ariaLabel="resume-Icon navbar" 
                href="https://drive.google.com/file/d/1Xf6bTE8tKGeF_1lzUbpaEivpo4hF1LdG/view?usp=sharing" 
                icon={faFilePdf} />

            <Magnetic>
                <button aria-label="Scroll-to-Home" className="rounded py-1 px-2 sm:px-4 text-[12px] sm:text-[15px] md:px-4 cursor-none" onClick={() => scrollToSection("hero")}>
                    <h3>
                        Home
                    </h3>
                </button>
            </Magnetic>

            <Magnetic>
                <button aria-label="Scroll-to-Work" className="rounded py-1 px-2 sm:px-4 text-[12px] sm:text-[15px] md:px-4 cursor-none" onClick={() => scrollToSection("project")}>
                    <h3>
                        Work
                    </h3>
                </button>
            </Magnetic>

            <Magnetic>
                <button aria-label="Scroll-to-About" className="rounded py-1 px-2 sm:px-4 text-[12px] sm:text-[15px] md:px-4 cursor-none" onClick={() => scrollToSection("about")}>
                    <h3>
                        About
                    </h3>
                </button>
            </Magnetic>

            <Magnetic>
                <button aria-label="Scroll-to-Contact" className="rounded py-1 px-2 sm:px-4 text-[12px] sm:text-[15px] md:px-4 cursor-none" onClick={() => scrollToSection("contact")}>
                    <h3>
                        Contact
                    </h3>
                </button>
            </Magnetic>
        </nav>
    );
}
