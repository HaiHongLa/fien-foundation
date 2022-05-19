import "./HeaderTop.css"

const HeaderTop = () => {
  return (
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 text-left header-link">
            <a href="#">Contact us</a>
          </div>
          <div class="col-md-6 col-sm-6 text-right header-social">
            <a href="#" class="grow">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="grow">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
