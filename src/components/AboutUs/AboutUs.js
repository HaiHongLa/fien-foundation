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
                    We are the Foundation for Improving Education Outcomes of
                    Needy Students (FIEN Foundation) in Tanzania, Africa.
                  </p>
                  <p>
                    FIEN Foundation was founded in 2019 and officially
                    registered in Tanzania as a non-government organisation with
                    registration No. 00NGO/R/0323.
                  </p>
                  <p>
                    OUR VISION: To build a nation in which every student has the
                    opportunity to achieve a better education outcome regardless
                    of his or her financial background.
                  </p>
                  <p>
                    OUR MISSION: To enable needy students in Tanzania to achieve
                    better education outcomes by removing the barriers to school
                    attendance and hindrances to quality education.
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
                      We operate in Tanzania mainland, and our headquarters are
                      in Morogoro Municipality. Tanzania is a country in East
                      Africa within the African Great Lakes region.
                    </p>
                    <p>
                      The out-of-school rate is still very high in Tanzania,
                      with more than 6.7 million children of primary and
                      secondary school age being out of school, with girls
                      lagging behind boys in the transition from primary to
                      secondary education.
                    </p>
                    <p>
                      Poverty has been one of the reasons for an increasing
                      number of school-aged children dropping out of school or
                      failing to attend primary and secondary education in
                      Tanzania. For that reason, we are operating in Tanzania to
                      help the government increase the number of children
                      accessing primary and secondary education and improve
                      their educational outcomes.
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-sm-12">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.27000783371!2d37.61432191629007!3d-6.780237061469091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a5dc00cee7437%3A0xf0e8f2f705ae1dd1!2sMorogoro%2C%20Tanzania!5e0!3m2!1sen!2s!4v1660804957898!5m2!1sen!2s"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    id="ggmap"
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
