import MagneticButton from '../../MagneticButton/MagneticButton';

function HeadingComponent() {
    return (
        <nav className="z-20 w-full p-4 mt-2 h-fit">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">

                {/* Left Button - Always visible but properly spaced */}
                <div className="hidden md:block w-auto md:pl-[3.5rem]">
                    <MagneticButton
                        ariaLabel="View My Career Story"
                        content="My Career Story"
                        link="https://drive.google.com/file/d/1Xf6bTE8tKGeF_1lzUbpaEivpo4hF1LdG/view?usp=sharing"
                        styles="border-AAprimary border-2 p-3 rounded-lg font-sans cursor-none transition-transform hover:scale-105 text-sm sm:text-base md:text-md lg:text-xl"
                    />
                </div>

                {/* Right Buttons - Centered on smaller screens, aligned right on larger screens */}
                <div className="flex justify-center md:justify-end space-x-4 gap-x-4 md:pr-24">
                    <MagneticButton
                        ariaLabel="Visit GitHub Profile"
                        content="GH"
                        link="https://github.com/Ansh2004P"
                        styles="p-3 rounded-lg font-Asgard cursor-none transition-transform hover:scale-105 sm:text-xl lg:text-xl"
                    />
                    <MagneticButton
                        ariaLabel="Visit LinkedIn Profile"
                        content="LN"
                        link="https://www.linkedin.com/in/anshpatel2004/"
                        styles="p-3 rounded-lg font-Asgard cursor-none transition-transform hover:scale-105 text-sm sm:text-xl lg:text-xl"
                    />
                    <MagneticButton
                        ariaLabel="Read My Blog"
                        content="LT"
                        link="https://linktr.ee/anshpatel07"
                        styles="p-3 rounded-lg font-Asgard cursor-none transition-transform hover:scale-105 text-sm sm:text-xl lg:text-xl"
                    />
                </div>
            </div>
        </nav>
    );
}

export default HeadingComponent;
