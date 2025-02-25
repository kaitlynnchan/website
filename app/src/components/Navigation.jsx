import { useEffect, useState } from "react";
import "hover.css/css/hover-min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faFile, faBars } from "@fortawesome/free-solid-svg-icons";

import "../index.css";

const TopNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false);
  const [unclickableLinks, setUnclickableLinks] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const offset = (winHeight / 3) * 2;
      if (window.scrollY > offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    setIsMenuExpanded(!isMenuExpanded);

    // const pageName = document.querySelector('.page').id; // Assuming the page element has an id attribute
    // const menuLinks = document.querySelectorAll('.nav-menu ul li a');
    // const updatedLinks = [];

    // menuLinks.forEach(link => {
    //   const linkId = link.id;
    //   if (pageName.includes(linkId)) {
    //     updatedLinks.push(linkId);
    //     link.classList.add('unclickable');
    //   } else {
    //     link.classList.remove('unclickable');
    //   }
    // });

    // setUnclickableLinks(updatedLinks);
  };

  // Handle hamburger hover
  const handleHamburgerHover = (hoverState) => {
    setIsHamburgerHovered(hoverState);
  };

  return (
    <nav className={`top-nav pull-right fixed ${isVisible ? 'visible' : 'fade-out'}`}>
      {/* <div className="inner contact-info">
        <div className="row">
          <SocialIcons iconSize={"fa-lg"}/>
        </div>
      </div> */}
      <a className={`nav-hamburger fa-stack fa-lg hvr-icon-fade ${isHamburgerHovered || isMenuExpanded ? 'selected' : ''}`}
        onClick={handleHamburgerClick}
        onMouseEnter={() => handleHamburgerHover(true)}
        onMouseLeave={() => handleHamburgerHover(false)} >
          <FontAwesomeIcon icon={faCircle} className="fa-stack-2x hvr-icon icon-back"/>
          <FontAwesomeIcon icon={faBars} className="fa-stack-1x hvr-icon icon-front" />
      </a>
      <div className={`nav-menu ${isMenuExpanded ? 'expanded' : 'collapsed'}`}>
        <ul>
          <NavItem id="home" label="Home" />
          <NavItem id="about" label="About Me" />
          <NavItem id="projects" label="Projects" />
          <li>
              <SocialIcons iconSize={"fa-md"}/>
          </li>
        </ul>
      </div>
    </nav>
  );
};
  
const SocialIcons = ({ iconSize, backIcon }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`icons ${iconSize}`}>
      {[
        { link: "https://github.com/kaitlynnchan", icon: faGithub },
        { link: "https://www.linkedin.com/in/kaitlynn-chan-3b2935162/", icon: faLinkedinIn },
        { link: "https://drive.google.com/file/d/17RjmRSGnLhdQHUXH6xpLUb0Wcsnh-Ek7/view?usp=sharing", icon: faFile },
      ].map((social, index) => (
        <a
          key={index}
          className="fa-stack hvr-icon-fade"
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {backIcon && <FontAwesomeIcon
            icon={faCircle}
            className={`fa-stack-2x hvr-icon icon-back ${hovered === index ? "selected" : ""}`}
          />}
          <FontAwesomeIcon
            icon={social.icon}
            className={`fa-stack-1x hvr-icon icon-front ${hovered === index ? "selected" : ""}`}
          />
        </a>
      ))}
    </div>
  );
};
  
const SideNav = () => {
  const [selected, setSelected] = useState("home");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const offset = winHeight / 2;
      const homeTop = document.getElementById("home-page")?.offsetTop || 0;
      const aboutTop = document.getElementById("about-page")?.offsetTop || 0;
      const projectsTop = document.getElementById("projects-page")?.offsetTop || 0;
      const scrollY = window.scrollY;

      if (scrollY >= projectsTop - offset) {
        setSelected("projects");
      } else if (scrollY >= aboutTop - offset) {
        setSelected("about");
      } else {
        setSelected("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="side-nav-bar" 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} >
      <ul>
        <NavItem id="home" label="home" selected={selected === "home"} isHovered={isHovered} icon={true} />
        <NavItem id="about" label="about" selected={selected === "about"} isHovered={isHovered}  icon={true} />
        <NavItem id="projects" label="projects" selected={selected === "projects"} isHovered={isHovered} icon={true} />
      </ul>
    </section>
  );
};
  
const NavItem = ({ id, label, selected, isHovered, icon }) => {
    const handleClick = (e) => {
      e.preventDefault();
      document.getElementById(`${id}-page`).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li>
        <a href={`#${id}-page`} onClick={handleClick} className={selected ? "selected" : ""}>
          <div className={`animate__animated ${isHovered ? "show animate__fadeIn" : ""}`}>
            <p>{label}</p>
          </div>
          {icon && <FontAwesomeIcon icon={faCircle} className="icon fa-sm" />}
        </a>
      </li>
    );
};

export {
    TopNav,
    SideNav,
    SocialIcons
};