"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimation() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const elements = ref.current.querySelectorAll(".animate-text");

        gsap.fromTo(
            elements,
            {
                opacity: 0,
                skewY: 5, // Skew from the right
                y: 30,
                transformOrigin: "left center", // Skew from the right side
                clipPath: "inset(0% 100% 0% 0%)", // Initially hidden from the right
            },
            {
                opacity: 1,
                skewY: 0,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)", // Fully visible
                duration: 1.4, // Slower transition
                ease: "power3.out", // Smooth easing
                stagger: 0.3, // Delayed stagger effect
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return ref;
}
