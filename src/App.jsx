import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./temp/NavBar";
import Home from "./temp/Home";
import About from "./temp/About";
import Projects from "./temp/Projects";
import Contact from "./temp/Contact";
import Footer from "./temp/Footer";

function App() {
    useEffect(() => {
        window.location.hash = "";
    }, []);
    return (
        <>
            <Analytics />
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
