import "./Blog.css";
import ss1 from "../../assets/img/students/ss1.png";
import ss2 from "../../assets/img/students/ss2.jpg";
import ss3 from "../../assets/img/students/ss3.jpg";
import ss4 from "../../assets/img/students/ss4.jpg";

const Blog = () => {
  return (
    <div id="blog-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Our students' stories</h3>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-bottom-padded-md">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="blog animate-box">
              <a href="#">
                <img class="img-responsive" src={ss1} alt="" />
              </a>
              <div class="blog-text">
                <div class="prod-title">
                  <h3>
                    <a href="">Story from Latifa, form five student</a>
                  </h3>
                  <span class="posted_by">Dec 4, 2019</span>
                  <p>
                    My name is Latifa Hassani Sadick, a form five student at
                    Nsimbo Secondary School. I come from a poor family, ...
                  </p>
                  <p>
                    <a href="#">Learn More...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="blog animate-box">
              <a href="#">
                <img class="img-responsive" src={ss2} alt="" />
              </a>
              <div class="blog-text">
                <div class="prod-title">
                  <h3>
                    <a href="">Story from Jenipher, form one student</a>
                  </h3>
                  <span class="posted_by">Aug 20, 2019</span>
                  <p>
                    My name is Jenipher Johanes Magidanga, I was born on 20th
                    July 2009. I am a form one student at Tushikamane Secondary
                    School ...
                  </p>
                  <p>
                    <a href="#">Learn More...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="blog animate-box">
              <a href="#">
                <img class="img-responsive" src={ss3} alt="" />
              </a>
              <div class="blog-text">
                <div class="prod-title">
                  <h3>
                    <a href="">Story from Saada , form five student</a>
                  </h3>
                  <span class="posted_by">Aug 20, 2019</span>
                  <p>
                    My name is Saada Seif, a form five student at Mji mkuu
                    Secondary School. I am an orphan whom was abandoned by my
                    relatives ...
                  </p>
                  <p>
                    <a href="#">Learn More...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-bottom-padded-md">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog animate-box">
                <a href="#">
                  <img class="img-responsive" src={ss4} alt="" />
                </a>
                <div class="blog-text">
                  <div class="prod-title">
                    <h3>
                      <a href="">Story from William, form four student</a>
                    </h3>
                    <span class="posted_by">Aug 20, 2019</span>
                    <p>
                      My name is William Frederick, a student at Tushikamane
                      Secondary School, I graduated my lower secondary education
                      this year (2019) ...
                    </p>
                    <p>
                      <a href="#">Learn More...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
