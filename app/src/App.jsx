import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "hover.css/css/hover-min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { TopNav, SideNav } from "./components/Navigation.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx"
import ProjectsPage from "./components/ProjectsPage.jsx";
import "./index.css";

const dataUrl = "/data/data.json";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const winHeight = window.innerHeight;
  //     const navBar = document.querySelector(".top-nav");
  //     const contactInfo = document.querySelector(".top-nav .contact-info");
  //     const offset = (winHeight / 3) * 2;

  //     if (window.scrollY > offset) {
  //       navBar.classList.add("visible");
  //       navBar.classList.remove("fade-out");

  //       const contactInfoHeight = document.querySelector("#projects-page .contact-info")?.offsetHeight || 0;
  //       if (window.scrollY + winHeight >= document.body.offsetHeight - contactInfoHeight) {
  //         contactInfo?.classList.add("fade-out");
  //         contactInfo?.classList.remove("visible");
  //       } else {
  //         contactInfo?.classList.add("visible");
  //         contactInfo?.classList.remove("fade-out");
  //       }
  //     } else {
  //       navBar.classList.add("fade-out");
  //       navBar.classList.remove("visible");
  //       contactInfo?.classList.remove("visible");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      <TopNav />
      <SideNav />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
