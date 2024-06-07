import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    const { isDarkMode } = useContext(ThemeContext);

    const ThemeStyles = {
        dark: "bg-[#111] shadow-gray-700 text-gray-300",
        light: "bg-none",
    };

    return (
        <footer className={`w-full p-8 ${isDarkMode ? ThemeStyles.dark : ThemeStyles.light}`}>
            <div className={`flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <SocialIcon url="https://www.github.com/pranavbafna586" bgColor="none" fgColor={isDarkMode ? "#ffffff" : "#111"} />

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color={isDarkMode ? 'white' : 'black'}
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="https://github.com/pranavbafna586"
                            color={isDarkMode ? 'white' : 'black'}
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="/"
                            // target="_blank"
                            color={isDarkMode ? 'white' : 'black'}
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className={`my-8 ${isDarkMode ? 'border-gray-600' : 'border-blue-gray-50'}`} />
            <Typography color={isDarkMode ? 'white' : 'black'} className="text-center font-normal">
                &copy; 2024 GenArt
            </Typography>
        </footer>
    );
}
