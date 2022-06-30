import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 text-left header-link">
            <a href="https://www.givingway.com/donate/fien-foundation">
              Donate now
            </a>
          </div>
          <div class="col-md-6 col-sm-6 text-right header-social">
            <a href="https://www.facebook.com/fienfoundation/" class="grow">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/fienfoundation/" class="grow">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
