import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="h-[15vh] w-full items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#0E1016] pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0">
      <div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <p
          aria-label="Copyright 2023"
          role="heading"
          aria-level={1}
          className="m-0 p-0"
          aria-hidden="true"
          style={{ opacity: 1, transform: "translateY(0em) translateZ(0px)" }}
        >
          Copyright 2025
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
          <p
            aria-label="Design & Development by"
            role="heading"
            aria-level={1}
            className="m-0 p-0"
            aria-hidden="true"
            style={{ opacity: 1, transform: "translateY(0em) translateZ(0px)" }}
          >
            Design & Development by
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ansh's GitHub Profile"
            href="https://github.com/Ansh2004P"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <p
                aria-label="Ansh Patel"
                role="heading"
                aria-level={1}
                className="m-0 p-0"
                aria-hidden="true"
                style={{ opacity: 1, transform: "translateY(0em) translateZ(0px)" }}
              >
                Ansh Patel
              </p>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
