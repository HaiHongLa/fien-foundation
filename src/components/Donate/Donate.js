import './Donate.css'
const Donate = () => {
    return (
      <div className="donate">
        <div id='donate'></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Help our students succeed</h3>
            </div>
            <div class="container">
              <div class="row">
                <iframe
                  class="donate-page"
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