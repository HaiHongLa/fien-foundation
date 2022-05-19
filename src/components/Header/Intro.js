import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div class="intro-text">
                <h2>Donate to support students in need</h2>
                <a id="donate-btn" className="btn btn-primary btn-lg" href="#">Donate now</a>
              <p>
                Every needy students deserves the opportunity to learn and prosper
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
