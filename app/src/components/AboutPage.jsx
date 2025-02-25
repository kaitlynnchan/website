import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

import "./AboutPage.css";

const dataUrl = "/data/data.json";

const AboutPage = () => {
  const aboutDataDefault = {
    aboutMe: "",
    profileImg: ""
  }
  const [data, setData] = useState(aboutDataDefault);

  useEffect(() => {
    fetch(dataUrl)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.error("Failed to load projects", err));
  }, []);
  
  return (
    <section id="about-page" className="about wrapper page scrollable">
      <section className="body">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
          <h1>About Me</h1>
          <div className="divider"></div>
        </div>
        <div className="inner" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="row box"> 
            <img id="profile-pic" className="col-sm-4 col-xs-12" src={data.profileImg} />
            <div className="col-sm-8 text">
              <h4>{data.aboutMe}</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
)};

export default AboutPage;