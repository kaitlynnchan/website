import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "hover.css/css/hover-min.css";
import "aos/dist/aos.css";
import AOS from "aos";

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

export {
  App,
  dataUrl
};
