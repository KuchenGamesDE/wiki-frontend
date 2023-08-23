import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

import { classNames } from '../util';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            <button
                type="button"
                onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
                    'inline-flex cursor-pointer items-center rounded-full border-transparent bg-zinc-800 p-3 text-white shadow-sm shadow-sm shadow-[var(--main-color)] transition-opacity hover:text-[var(--main-color)] hover:shadow-lg hover:shadow-[var(--main-color)] focus:border-transparent focus:outline-none focus:ring-0 focus:ring-2 focus:ring-[var(--accent-color)]'
                )}
            >
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    );
}
