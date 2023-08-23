import { useState, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const style_link_active =
    'relative hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]';
const style_link = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

const style_dd_link_active =
    'relative  hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]';
const style_dd_link = 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <nav className="fixed w-full bg-zinc-800 lg:absolute">
                <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div ref={createRef()} className="flex min-w-[60vw] items-center justify-between">
                            <Link
                                to="https://kuchengames.de"
                                className="flex flex-shrink-0 flex-row items-center justify-around p-2 font-bold text-[var(--white-color)] hover:text-white"
                            >
                                <img className="ml-3 h-8 w-8" src={Logo} alt="Workflow" />
                                <p className="ml-2 font-extrabold tracking-tight">KuchenGames</p>
                            </Link>
                            <div className="hidden md:block">
                                <div ref={createRef()} className="ml-10 flex items-baseline space-x-4">
                                    <Link to="https://kuchengames.de" className={style_link}>
                                        Homepage
                                    </Link>

                                    <Link to="https://dash.kuchengames.de" className={style_link + ' pointer-events-none cursor-not-allowed text-gray-500'}>
                                        Dashboard
                                    </Link>

                                    <Link to="https://shop.kuchengames.de" className={style_link}>
                                        Shop
                                    </Link>

                                    <Link to="/" className={currentPath === '/' ? style_link_active : style_link}>
                                        Wiki
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {() => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={createRef()} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                <Link to="https://kuchengames.de" className={style_dd_link}>
                                    Homepage
                                </Link>

                                <Link to="https://dash.kuchengames.de" className={style_dd_link + ' pointer-events-none cursor-not-allowed text-gray-500'}>
                                    Dashboard
                                </Link>

                                <Link to="https://shop.kuchengames.de" className={style_dd_link}>
                                    Shop
                                </Link>

                                <Link to="/" className={currentPath === '/' ? style_dd_link_active : style_dd_link}>
                                    Wiki
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    );
}
