import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function RootDisplay() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}