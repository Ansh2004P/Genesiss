"use client"; // Required for FontAwesome in Next.js App Router
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  link: string;
  icon: IconDefinition;
};

interface IconLinkProps {
  href: string;
  icon: IconDefinition;
  ariaLabel: string;
  color?: string | undefined
  style?: string | undefined
  id?: string | undefined
}

export const IconLink: React.FC<IconLinkProps> = ({ id, href, icon, ariaLabel, color = "black", style = "text-xl md:text-2xl" }) => (
  <Link
    id={id}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`transition-transform transform cursor-none ${style}`}
  >
    <FontAwesomeIcon pointerEvents={"none"} icon={icon} color={color} z={0} />
  </Link>
);


const ProjectLinkButton: React.FC<Props> = ({ link, icon }) => {
  return (
    <div className="w-12 h-12 sm:w-[3.7rem] sm:h-[3.7rem] bg-white rounded-full flex items-center justify-center p-2 transition-transform transform hover:scale-105 cursor-none">
      <button className="w-full h-full bg-white flex items-center justify-center cursor-none rounded-full">
        <IconLink ariaLabel="project-link" href={link} icon={icon} />
      </button>
    </div>
  );
};

export default ProjectLinkButton;
