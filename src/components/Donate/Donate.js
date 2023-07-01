import "./Donate.css";
const Donate = () => {
  return (
    <div className="donate">
      <div id="donate"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Help our students succeed</h3>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-md-12 text-center heading-section animate-box">
              <iframe
                className="my-iframe"
                src="https://gogetfunding.com/embed-widget?campaignid=7922586&frame_type=t1"
                title="gogetfunding"
                frameBorder={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
