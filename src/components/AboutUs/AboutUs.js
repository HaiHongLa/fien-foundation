import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="heading-section">
        <h3>About us</h3>
        <p>
          Foundation for improving education outcome of the needy student (FIEN)
        </p>
      </div>
      <div>
        <div id="about">
          <div id="who-we-are">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-md-6 about-img"></div>
                <div class="col-xs-12 col-md-6">
                  <div class="section-title">
                    <h2>Who are we?</h2>
                  </div>
                  <div className="section-text">
                    <p>
                      We seek a nation where every needy student has an
                      opportunity to achieve a better education outcome
                    </p>
                    <p>Our long term objectives include:</p>
                    <ol>
                      <li>
                        To strengthen leadership skills and facilitate the
                        conduct of counselling and career guidance to students
                      </li>
                      <li>
                        To provide financial aid to needy students for transport
                        fare, health insurance, stationery, school uniforms and
                        sanitization towels for girls so that they can raise
                        their classroom attendance rate
                      </li>
                      <li>
                        To facilitate the availability of internship, project
                        work and teacher exchange programs aiming at sharing
                        experiences and expertise
                      </li>
                      <li>
                        To advocate for teaching improvement and digital
                        learning
                      </li>
                      <li>
                        To promote volunteerism spirit for community works
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
          <div id="where-are-we">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div className="container-fluid">
                  <div className="section-title2">
                    <h2>Where are we?</h2>
                  </div>
                  <div className="section-text2">
                    <p>
                      We operate in Tanzania Mainland, East Africa, and our
                      headquarters are in Morogoro Municipality. The
                      organization started as an initiative in 2015, and
                      officially was registered as a non-government organization
                      in August 2019 with a registration number 00NGO/R/0323
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <iframe
                  id="ggmap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.27000794112!2d37.61432175761521!3d-6.780237061060156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a5dc00cee7437%3A0xf0e8f2f705ae1dd1!2sMorogoro%2C%20Tanzania!5e0!3m2!1svi!2s!4v1652947018708!5m2!1svi!2s"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="ggmap"
                ></iframe>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
