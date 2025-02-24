type Props = {
    title: string,
    description: string,
    techStack: string[],
    img?: string | undefined,
    liveLink?: string | undefined,
    githubLink: string,
}


export const workList: Props[] = [
    {
        title: "CodeSync",
        description: "A Interview Platform with real-time code sharing and user authentication.",
        techStack: ["NextJS", "NeonDB", "TypeScript"],
        img: "/images/Work/CodeSync.png",
        liveLink: "https://code-sync-pearl.vercel.app/",
        githubLink: "https://github.com/Ansh2004P/CodeSync"
    },
    {
        title: "BuzzChat",
        description: "A Chat Application with real-time messaging and user authentication.",
        techStack: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Socket.io"],
        img: "/images/Work/BuzzChat.png",
        liveLink: "https://buzzchat-fe.onrender.com/",
        githubLink: "https://github.com/Ansh2004P/BuzzChat"
    },
    {
        title: "SilverScreen Oasis",
        description: "A Movie searching Platform with AI recommendation and user authentication.",
        techStack: ["ReactJs", "Redux Toolkit", "OpenAI"],
        img: "/images/Work/SilverScreenOasis.png",
        liveLink: "https://silver-screen-oasis.vercel.app/",
        githubLink: "https://github.com/Ansh2004P/SilverScreen-Oasis"
    },
    {
        title: "InstaBurger",
        description: "A Food Ordering Application ",
        techStack: ["ReactJs", "Redux Toolkit", "Javascript"],
        img: "/images/Work/InstaBurger.png",
        liveLink: "https://insta-burger.vercel.app/",
        githubLink: "https://github.com/Ansh2004P/Insta-Burger"
    },


    {
        title: "SpotyTube",
        description: "A NodeJS Script for Transfering Youtube Playlist to spotify playlist.",
        techStack: ["NodeJs", "PuppeterJS", "Readline-sync",],
        githubLink: "https://github.com/Ansh2004P/SpotyTube"
    },
    {
        title: "Apoorv App",
        description: "A Flutter Application for a centralizing the managment of TechFest 24'.",
        techStack: ["Flutter", "Firebase", "Dart"],
        img: "/images/Work/Apoorv_app.png",
        githubLink: "https://github.com/siddharthO3/Apoorv-App",
        liveLink: "https://linktr.ee/apoorv2024?lt_utm_source=lt_share_link#373301105"
    }
]