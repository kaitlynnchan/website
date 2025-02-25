import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "hover.css/css/hover-min.css";

import "./HomePage.css";

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1100px)").matches);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.matchMedia("(max-width: 1100px)").matches);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
    <section id="home-page" className="home wrapper page">
      <section className="body">
        <div className="inner box">
            <h1>Kaitlynn Chan</h1>
            <h4>Computer Science and Business Student at Simon Fraser University</h4>
            <section className={`nav-btns ${isMobile ? "center" : ""}`}>
                <NavBtn id="about" label="About Me" />
                <NavBtn id="projects" label="Projects" />
            </section>
        </div>
      </section>
    </section>
  )};

const NavBtn = ({ id, label }) => {
    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById(`${id}-page`).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="side-nav">
            <a href={`#${id}-page`} onClick={handleClick} className="hvr-float">
                <h4 className="">{label}</h4>
            </a>
        </section>
    )
};

export default HomePage;