import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

import "./AboutPage.css";
import { dataUrl } from "../App";

const AboutPage = () => {
  const aboutDataDefault = {
    aboutMe: "",
    profileImg: "",
    achievements: []
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
              <p dangerouslySetInnerHTML={{ __html: data.aboutMe }} />
              <h5>Recognitions</h5>
              <Achievements achievements={data.achievements}/>
            </div>
          </div>
        </div>
      </section>
    </section>
)};

const Achievements = ({ achievements }) => {
  return (
    <p>
      { achievements.map((achievement, index) => (
        <span key={index}>
          <strong>{achievement.name}</strong> {achievement.year}
          {index < achievements.length - 1 && " \u2022 "}
        </span>
      )) }
    </p>
  )
};

export default AboutPage;