import "./OurGoals.css";

const OurGoals = () => {
  return (
    <div id="objectives-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center animate-box">
            <h3 className="mission-title">Our long term objectives</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-users fa-lg"></i>
              </span>
              <h3>Counselling</h3>
              <p>
                To strengthen leadership skills and facilitate the conduct of
                counseling and career guidance to students
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-money fa-lg"></i>
              </span>
              <h3>Financial Aid</h3>
              <p>
                To provide financial aid to students for transport fares, health
                insurance, stationery, school uniforms, and sanitization towels
                for girls to raise classroom attendance rate
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-briefcase fa-lg"></i>
              </span>
              <h3>Sharing experience</h3>
              <p>
                To facilitate the availability of internship, project work and
                teacher exchange programs aiming at sharing experiences and
                expertise
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-graduation-cap fa-lg"></i>
              </span>
              <h3>Education</h3>
              <p>To advocate for teaching improvement and digital learning</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-heart fa-lg"></i>
              </span>
              <h3>Volunteering</h3>
              <p>To promote volunteerism spirit for community works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
