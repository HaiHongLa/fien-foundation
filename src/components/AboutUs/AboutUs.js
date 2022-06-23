import React from "react";
import "./AboutUs.css";
import OurGoals from "./OurGoals";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div id="about-us"></div>
      <div className="heading-section">
        <h3>About us</h3>
      </div>
      <div>
        <div id="about">
      
            <div id="who-we-are">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-12 col-md-6 about-img"></div>
                  <div class="col-xs-12 col-md-6 about-content">
                    <div class="section-title">
                      <h2>Who we are</h2>
                    </div>
                    <div className="section-text">
                      <p>
                        Foundation for improving education outcome of the needy
                        student (FIEN)
                      </p>
                      <p>
                        We seek a nation where every needy student has an
                        opportunity to achieve a better education outcome
                      </p>
                    </div>
                  </div>
              
              </div>
            </div>
          </div>
          <OurGoals />
          <div className="row">
            <div id="where-are-we">
              <div class="row">
                <div class="col-xs-12 col-md-6 location-content">
                  <div className="container-fluid">
                    <div className="section-title2">
                      <h2>Where we are</h2>
                    </div>
                    <div className="section-text2">
                      <p>
                        We operate in Tanzania Mainland, East Africa, and our
                        headquarters are in Morogoro Municipality. The
                        organization started as an initiative in 2015, and
                        officially was registered as a non-government
                        organization in August 2019 with a registration number
                        00NGO/R/0323
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
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
