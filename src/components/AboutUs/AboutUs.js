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
      <div id="about">
        <div className="container-fluid p-0">
          <div id="who-we-are">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-sm-12 about-img"></div>
              <div className="col-xs-12 col-md-6 col-sm-12 about-content">
                <div className="section-title">
                  <h2>Who we are</h2>
                </div>
                <div className="section-text">
                  <p>
                    We are a nonprofit organization seeking to improve education
                    outcome of the needy students in Tanzania. We have a dream
                    to see a nation where every student has an opportunity to
                    achieve a better education outcome regardless his or her
                    financial background.
                  </p>
                  <p>
                    Our work is guided by its mission to improve education
                    outcome of the needy students. FIEN Foundation is one of the
                    foundations in Tanzania, it works almost exclusively in
                    Tanzania main land. It was founded in 2015 by Magessa
                    George, a Tanzanian educationist and researcher.
                  </p>
                  <p>
                    The organization was officially registered in 2019 as a
                    non-government organization with a registration number
                    00NGO/R/0323, and it operates independently under the
                    governance of its own Management Team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <OurGoals />
        </div>
        <div className="container-fluid p-0">
          <div id="where-are-we">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-sm-12 location-content">
                <div className="container-fluid">
                  <div className="section-title2">
                    <h2>Where we are</h2>
                  </div>
                  <div className="section-text2">
                    <p>
                      We operate in Tanzania Mainland, and our headquarters are
                      in Morogoro Municipality. Tanzania is a country in East
                      Africa within the African Great Lakes region. It borders
                      Uganda to the north; Kenya to the northeast; Comoro
                      Islands and the Indian Ocean to the east. Mount
                      Kilimanjaro, Africa's highest mountain, is in northeastern
                      Tanzania.
                    </p>
                    <p>
                      The out-of-school rate is still very high in Tanzania,
                      with 6.7 million among children, adolescents and youth of
                      primary and secondary school age being out of school, with
                      girls lagging behind boys in the transition from primary
                      to secondary education in 2017 (UNESCO, 2018).
                    </p>
                    <p>
                      Children out of school (% of primary school age) in
                      Tanzania was also reported at 16.08 % in 2020 (World Bank,
                      2021).
                    </p>
                    <p>
                      Poverty has been one of the reasons for increasing number
                      of school aged children to drop out of school or to fail
                      joining primary and secondary education in Tanzania.
                      Therefore, failure of children from disadvantaged
                      background to join school or continue with education is
                      the main reason for operating in Tanzania so as to help
                      the government to increase the number of children
                      accessing primary and secondary education, and improving
                      their education outcome.
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-sm-12">
                <div className="map">
                  <iframe
                    id="ggmap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.27000794112!2d37.61432175761521!3d-6.780237061060156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a5dc00cee7437%3A0xf0e8f2f705ae1dd1!2sMorogoro%2C%20Tanzania!5e0!3m2!1svi!2s!4v1652947018708!5m2!1svi!2s"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ggmap"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AboutUs;
