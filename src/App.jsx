import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './routes/Home';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <BrowserRouter className="min-h-[100vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect 404 to Homepage */}
                </Routes>
                <Footer />
                <ScrollToTop />
            </BrowserRouter>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default App;
