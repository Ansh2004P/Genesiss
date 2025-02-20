import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const grayDotRef = useRef<HTMLDivElement>(null);
  const currentTarget = useRef<HTMLElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isProfilePic, setIsProfilePic] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const animationInProgress = useRef(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Store the last known mouse client coordinates.
  const lastMousePosition = useRef({
    clientX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    clientY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 767px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      gsap.set(cursorRef.current, { display: "none" });
      gsap.set(grayDotRef.current, { display: "none" });
      return;
    }

    const cursor = cursorRef.current;
    const grayDot = grayDotRef.current;
    if (!cursor || !grayDot) return;

    // Position the white cursor initially at the center of the viewport.
    gsap.set(cursor, { x: lastMousePosition.current.clientX, y: lastMousePosition.current.clientY });

    // Quick setters for smoother animations.
    const moveCursorX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const moveDotX = gsap.quickTo(grayDot, "x", { duration: 0.03, ease: "power1.out" });
    const moveDotY = gsap.quickTo(grayDot, "y", { duration: 0.03, ease: "power1.out" });

    const updateWhiteCursor = (clientX: number, clientY: number) => {
      if (!animationInProgress.current && !currentTarget.current && !isProfilePic && !isLink) {
        moveCursorX(clientX - 25);
        moveCursorY(clientY - 25);
      }
    };

    const updateCursorState = (clientX: number, clientY: number, target?: HTMLElement | null) => {
      const effectiveTarget =
        target ||
        (document.elementFromPoint(lastMousePosition.current.clientX, lastMousePosition.current.clientY) as HTMLElement | null);

      // --- Profile Pic Case ---
      if (effectiveTarget?.id === "profile-pic" && !animationInProgress.current) {
        setIsProfilePic(true);
        setIsLink(false);
        gsap.to(cursor, {
          width: 110,
          height: 45,
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          x: clientX - 50,
          y: clientY - 20,
          duration: 0.2,
          ease: "power2.out",
        });
        if (!isHovering) setIsHovering(true);
      } else if (effectiveTarget?.id === "view-resume" && !animationInProgress.current) {
        setIsLink(true);
        setIsProfilePic(false);
        gsap.to(cursor, {
          width: 130,
          height: 35,
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          x: clientX - 50,
          y: clientY - 20,
          duration: 0.2,
          ease: "power2.out",
        });
        if (!isHovering) setIsHovering(true);
      } else if (isProfilePic || isLink) {
        gsap.to(cursor, {
          width: 35,
          height: 35,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          x: clientX - 25,
          y: clientY - 25,
          duration: 0.2,
          ease: "power2.out",
        });
        setIsHovering(false);
        setIsProfilePic(false);
        setIsLink(false);
      }

      // --- Interactive Elements Case ---
      const interactiveTarget = effectiveTarget?.closest("button, #site-link-sidlabs") || null;

      if (interactiveTarget && !animationInProgress.current) {
        animationInProgress.current = true;
        let targetElement = interactiveTarget;
        if (interactiveTarget.id === "site-link-sidlabs" && interactiveTarget.parentElement) {
          targetElement = interactiveTarget.parentElement;
        }

        if (currentTarget.current !== targetElement) {
          currentTarget.current?.classList.remove("cursor-active");
          currentTarget.current = targetElement as HTMLElement;
          currentTarget.current.classList.add("cursor-active");
        }
        const rect = targetElement.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(targetElement);
        gsap.to(cursor, {
          x: rect.left - 5,
          y: rect.top - 5,
          width: rect.width + 10,
          height: rect.height + 10,
          borderRadius: computedStyle.borderRadius || "8px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            animationInProgress.current = false;
          },
        });
        if (!isHovering) setIsHovering(true);
      } else if (!interactiveTarget && currentTarget.current) {
        animationInProgress.current = true;
        currentTarget.current.classList.remove("cursor-active");
        currentTarget.current = null;
        gsap.to(cursor, {
          x: clientX - 25,
          y: clientY - 25,
          width: 35,
          height: 35,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            animationInProgress.current = false;
          },
        });
        if (isHovering) setIsHovering(false);
      } else if (!interactiveTarget && !animationInProgress.current) {
        updateWhiteCursor(clientX, clientY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { clientX: e.clientX, clientY: e.clientY };

      // Using client coordinates directly for fixed elements.
      const clientX = e.clientX;
      const clientY = e.clientY;

      moveDotX(clientX - 2);
      moveDotY(clientY - 2);

      updateCursorState(clientX, clientY, e.target as HTMLElement);
    };

    const handleScroll = () => {
      // When scrolling, the viewport changes but our fixed elements remain relative to the viewport.
      const clientX = lastMousePosition.current.clientX;
      const clientY = lastMousePosition.current.clientY;

      moveDotX(clientX - 2);
      moveDotY(clientY - 2);

      updateCursorState(clientX, clientY);
    };

    const handleClick = () => {
      gsap.to(cursor, { scale: 1.1, duration: 0.07, ease: "power1.out", yoyo: true, repeat: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, [isHovering, isLink, isProfilePic, isSmallScreen]);

  return (
    <>
      {!isSmallScreen && (
        <>
          {/* White cursor (custom cursor) */}
          <div
            ref={cursorRef}
            className={`fixed top-0 left-0 flex items-center justify-center w-9 h-9 
              bg-gradient-to-r from-[#CFCBC3] via-[#E1DFD9] to-[#F2F1ED] filter rounded-full 
              pointer-events-none mix-blend-difference z-[9998]
              ${isProfilePic ? "text-black text-lg font-bold" : isLink ? "text-black text-sm font-semibold" : ""}`}
          >
            {isProfilePic && "Chill Guy"}
            {isLink && "View Resume"}
          </div>

          {/* Gray dot */}
          <div
            ref={grayDotRef}
            className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-black"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </>
      )}
    </>
  );
}
