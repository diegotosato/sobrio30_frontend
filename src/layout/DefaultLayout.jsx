import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ArrowToTop from "../components/ArrowToTop.jsx";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <ArrowToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}