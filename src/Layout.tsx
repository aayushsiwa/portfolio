import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout() {
    return (
        <>
            <NavBar />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
