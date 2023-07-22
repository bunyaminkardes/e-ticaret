import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Login from "./components/login";
import Home from "./components/home";
import NoPage from "./components/nopage";
import './styles/bootstrap.5.3.0.min.css'; //ilk olarak bootstrap import et ki custom css daha öncelikli olsun.
import './styles/custom.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);