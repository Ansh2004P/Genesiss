"use client";
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
    clientX: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    clientY: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
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

    // Position the white cursor initially at the document's center.
    gsap.set(cursor, { x: lastMousePosition.current.clientX, y: lastMousePosition.current.clientY });

    // Quick setters for smoother animations.
    const moveCursorX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const moveDotX = gsap.quickTo(grayDot, "x", { duration: 0.03, ease: "power1.out" });
    const moveDotY = gsap.quickTo(grayDot, "y", { duration: 0.03, ease: "power1.out" });

    const updateWhiteCursor = (docX: number, docY: number) => {
      // When not interacting, the white cursor follows the gray dot.
      if (!animationInProgress.current && !currentTarget.current && !isProfilePic) {
        moveCursorX(docX - 25);
        moveCursorY(docY - 25);
      }
    };

    // ---------------------------------------------------
    // Consolidated function for updating the cursor state
    // (whether from a mousemove or a scroll event)
    // ---------------------------------------------------
    const updateCursorState = (
      docX: number,
      docY: number,
      target?: HTMLElement | null
    ) => {
      // Use the passed-in target if available; otherwise determine it via elementFromPoint.
      const effectiveTarget =
        target || (document.elementFromPoint(lastMousePosition.current.clientX, lastMousePosition.current.clientY) as HTMLElement | null);

      // console.log(effectiveTarget);

      // --- Profile Pic Case ---
      if (effectiveTarget?.id === "profile-pic" || effectiveTarget?.id === "view-resume" && !animationInProgress.current) {
        if (effectiveTarget?.id === "profile-pic") {
          setIsProfilePic(true);
          gsap.to(cursor, {
            width: 130,
            height: 50,
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            x: docX - 50,
            y: docY - 20,
            duration: 0.2,
            ease: "power2.out",
          });
        }
        else if (effectiveTarget?.id === "view-resume") {
          setIsLink(true);
          gsap.to(cursor, {
            width: 150,
            height: 40,
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            x: docX - 50,
            y: docY - 20,
            duration: 0.2,
            ease: "power2.out",
          });
        }

        if (!isHovering) setIsHovering(true);
      } else if (isProfilePic || isLink) {
        gsap.to(cursor, {
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          x: docX - 25,
          y: docY - 25,
          duration: 0.2,
          ease: "power2.out",
        });
        setIsHovering(false);
        setIsProfilePic(false);
        setIsLink(false);
      }

      // --- Interactive Elements Case ---
      const interactiveTarget =
        effectiveTarget?.closest("button, #site-link-sidlabs") || null;

      if (interactiveTarget && !animationInProgress.current) {
        animationInProgress.current = true;
        // If the target is #site-link-sidlabs, use its parent.
        let targetElement = interactiveTarget;
        if (interactiveTarget.id === "site-link-sidlabs") {
          targetElement = interactiveTarget.parentElement!;
        }

        if (currentTarget.current !== targetElement) {
          currentTarget.current?.classList.remove("cursor-active");
          currentTarget.current = targetElement as HTMLElement;
          currentTarget.current.classList.add("cursor-active");
        }
        const rect = targetElement.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(targetElement);
        gsap.to(cursor, {
          x: isProfilePic ? docX - 50 : rect.left + window.scrollX - 5,
          y: isProfilePic ? docY - 40 : rect.top + window.scrollY - 5,
          width: isProfilePic ? 100 : rect.width + 10,
          height: isProfilePic ? 40 : rect.height + 10,
          borderRadius: isProfilePic ? "10px" : computedStyle.borderRadius || "8px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            animationInProgress.current = false;
          },
        });
        if (!isHovering) setIsHovering(true);
      } else if (!interactiveTarget && currentTarget.current) {
        // Reset if we were hovering over an interactive element and now we are not.
        animationInProgress.current = true;
        currentTarget.current.classList.remove("cursor-active");
        currentTarget.current = null;
        gsap.to(cursor, {
          x: docX - 25,
          y: docY - 25,
          width: 50,
          height: 50,
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
        // When not interacting, simply update the white cursor's position.
        updateWhiteCursor(docX, docY);
      }
    };


    // ---------------------------
    // Mousemove handler
    // ---------------------------
    const handleMouseMove = (e: MouseEvent) => {
      // Update last known mouse position.
      lastMousePosition.current = { clientX: e.clientX, clientY: e.clientY };

      // Compute document-relative positions.
      const docX = e.clientX + window.scrollX;
      const docY = e.clientY + window.scrollY;

      // Update the gray dot's position.
      moveDotX(docX - 2);
      moveDotY(docY - 2);

      // Update the cursor state using the event target.
      updateCursorState(docX, docY, e.target as HTMLElement);
    };

    // ---------------------------
    // Scroll handler
    // ---------------------------
    const handleScroll = () => {
      // Recalculate positions based on the last mouse position.
      const { clientX, clientY } = lastMousePosition.current;
      const docX = clientX + window.scrollX;
      const docY = clientY + window.scrollY;

      // Update the gray dot.
      moveDotX(docX - 2);
      moveDotY(docY - 2);

      // Update the cursor state (no event target is provided here,
      // so the helper will use elementFromPoint).
      updateCursorState(docX, docY);
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
  }, [isHovering, isLink, isProfilePic]);

  return (
    <>
      {!isSmallScreen && <>
        {/* White cursor (custom cursor) */}
        <div
          ref={cursorRef}
          className={`absolute top-0 left-0 flex items-center justify-center w-12 h-12 
    bg-gradient-to-r from-[#CFCBC3] via-[#E1DFD9] to-[#F2F1ED] filter rounded-full 
    pointer-events-none mix-blend-difference z-[9998]
    ${(isProfilePic) ? "text-black text-lg font-bold ml-12 mt-4 " : (isLink) ? "text-black text-md font-semibold ml-12 mt-4" : ""}`}
        >
          {isProfilePic && "Chill Guy"}
          {isLink && "View Resume"}
        </div >

        {/* Gray dot */}
        < div
          ref={grayDotRef}
          className={"absolute top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-black"}
          style={{ transform: "translate(-50%, -50%)" }
          }
        />
      </>}
    </>
  );

}
