import { useState, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.hash;

    useEffect(() => {
        if (localStorage) {
            let sideStatus = localStorage.getItem('sidebar') || 'opened';
            setOpen(sideStatus.toLowerCase() === 'opened');
        }
    }, []);

    useEffect(() => {
        if (localStorage) {
            localStorage.setItem('sidebar', open ? 'opened' : 'closed'); // Use `setItem` to save the value
        }
    }, [open]);

    return (
        <nav
            className={
                (open ? 'w-[calc(var(--side-width))] border-r border-r-[var(--main-color)] lg:w-[var(--side-width)]' : 'w-0 border-0') +
                ' fixed left-0 top-0 z-[990] h-screen min-h-screen bg-zinc-900 pt-[70px] transition-all delay-150 ease-in-out lg:relative lg:h-full lg:pt-0'
            }
        >
            <div className="z-[991] flex h-screen w-full flex-col items-center justify-start overflow-y-scroll lg:h-full">
                {open ? (
                    <button onClick={() => setOpen(false)} className="absolute left-[100%] top-2 z-[1000] p-2 text-white">
                        <FiX size={24} />
                    </button>
                ) : (
                    <button onClick={() => setOpen(true)} className="absolute left-[100%] top-2 z-[1000] p-2 text-white">
                        <FiMenu size={24} />
                    </button>
                )}
                <h2 className="font-bold">wiki.kuchengames.de</h2>
            </div>
        </nav>
    );
}
