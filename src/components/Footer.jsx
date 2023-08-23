import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTiktok, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import Logo from '../assets/images/logo.png';

export default function Navbar() {
    return (
        <footer className="items-left flex min-h-[150px] w-screen flex-col justify-start bg-zinc-900 p-3">
            <div className="items-left flex flex-col justify-start md:flex-row">
                <Link to="https://kuchengames.de" className="flex flex-shrink-0 flex-row items-center p-2 font-bold text-[var(--white-color)] hover:text-white">
                    <img className="h-[70px] w-[70px]" src={Logo} alt="Workflow" />
                    <p className="ml-2 text-xl font-extrabold tracking-tight">KuchenGames</p>
                </Link>
            </div>

            <div className="items-left mb-2 flex flex-row justify-start">
                <Link target="_blank" to="https://discord.kuchengames.de" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaDiscord className="mr-1" size="1.5rem" />
                </Link>
                <Link target="_blank" to="https://github.com/kuchengamesde" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaGithub className="mr-1" size="1.5rem" />
                </Link>
                <Link target="_blank" to="https://www.tiktok.com/@kuchengames.de" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaTiktok className="mr-1" size="1.5rem" />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/kuchengames" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaInstagram className="mr-1" size="1.5rem" />
                </Link>
                <Link target="_blank" to="https://twitter.com/KuchenGamesDE" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaTwitter className="mr-1" size="1.5rem" />
                </Link>
                <Link target="_blank" to="https://www.youtube.com/@KuchenGamesDE" className="p-2 text-[var(--main-color)] hover:text-[var(--description-color)]">
                    <FaYoutube className="mr-1" size="1.5rem" />
                </Link>
            </div>

            <hr />

            <p className="mt-2 pt-2 text-sm font-semibold text-[var(--description-color)]">
                Copyright © 2023 »{' '}
                <Link target="_blank" to="https://kuchengames.de" className="hover:text-[var(--main-color)]">
                    KuchenGames.de
                </Link>
            </p>

            <p className="pt-2 text-sm font-thin text-[var(--description-color)]">
                Made with ❤ by{' '}
                <Link target="_blank" to="https://github.com/LuciferMorningstarDev" className="hover:text-[var(--main-color)]">
                    LuciferMorningstarDev
                </Link>
            </p>
        </footer>
    );
}
