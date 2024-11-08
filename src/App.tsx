import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
    useEffect(() => {
        window.location.hash = "";
    }, []);
    return (
        <>
            <NavBar />
            <div className="pt-16">
                <section id="home">
                    <Home />
                </section>
                <About />
                <Projects />
                <Contact />
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default App;
