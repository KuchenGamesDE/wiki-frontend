import { useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function Home() {
    useEffect(() => {
        document.title = 'KuchenGames Wiki | Startseite';
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center">
            <div className="flex w-screen flex-row">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}
