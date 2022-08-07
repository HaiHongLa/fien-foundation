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
              <p className="text-center">
                Strengthening students’ leadership skills, and facilitating the
                conduct of counselling and career guidance to needy students.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-money fa-lg"></i>
              </span>
              <h3>Financial Aid</h3>
              <p className="text-center">
                Providing financial aid to students whose talent and promise
                exceed their financial resources to complete their education.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-briefcase fa-lg"></i>
              </span>
              <h3>Sharing experience</h3>
              <p className="text-center">
                Facilitating the availability of internship, research and
                teacher exchange programs for purpose of sharing experience and
                expertise.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-graduation-cap fa-lg"></i>
              </span>
              <h3>Digital Teaching</h3>
              <p className="text-center">
                Advocating the use of digital technology for effective teaching
                and learning by equipping schools with ICT facilities.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="services animate-box">
              <span>
                <i className="fa fa-heart fa-lg"></i>
              </span>
              <h3>Volunteering</h3>
              <p className="text-center">
                Leveraging the recruit of volunteers to harness their skills and
                support for improving educational outcomes of needy students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
