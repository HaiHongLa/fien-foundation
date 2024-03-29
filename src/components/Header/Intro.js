import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <h2>Donate to support students in need</h2>
              <a
                id="donate-btn"
                className="btn btn-primary btn-lg"
                href="https://gogetfunding.com/health-insurance-for-the-needy-students-in-tanzania/"
              >
                Donate now
              </a>
              <p className="text-center">
                Every student in need deserves the opportunity to learn and
                prosper
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
