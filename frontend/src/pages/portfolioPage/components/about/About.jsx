import React from "react";
import "./About.css";
import ME from "../../assets/dgu.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me-about" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>300+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Projects</small>
              </article>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos perferendis ipsam magnam dicta unde nam consequuntur
              saepe commodi voluptates! Ab voluptates ea error incidunt eveniet
              autem, illum corporis sint enim?
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
