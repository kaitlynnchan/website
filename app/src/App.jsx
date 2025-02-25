import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { TopNav, SideNav } from "./components/Navigation.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx"
import ProjectsPage from "./components/ProjectsPage.jsx";
import "./index.css";

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

export default App;
