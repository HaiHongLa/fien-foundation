import './Donate.css'
const Donate = () => {
    return (
      <div className="donate">
        <div id='donate'></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Help our students succeed</h3>
            </div>
            <div className="container">
              <div className="row">
                <iframe
                  className="donate-page"
                  src="https://www.givingway.com/donate/fien-foundation"
                  frameBorder="0"
                  title='givingway'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Donate