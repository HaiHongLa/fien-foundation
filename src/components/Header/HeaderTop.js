import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 text-left header-link">
            <a href="https://www.givingway.com/donate/fien-foundation">
              Donate now
            </a>
          </div>
          <div className="col-md-6 col-sm-6 text-right header-social">
            <a href="https://www.facebook.com/fienfoundation/" className="grow">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/fienfoundation/" className="grow">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
