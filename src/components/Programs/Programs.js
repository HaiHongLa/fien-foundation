import "./Programs.css";
import pg1 from '../../assets/img/programs/pg1.jpg'
import pg2 from "../../assets/img/programs/pg2.jpg";
import pg3 from "../../assets/img/programs/pg3.jpg";
import pg4 from "../../assets/img/programs/pg4.jpg";
import pg5 from "../../assets/img/programs/pg5.jpg";
import pg6 from "../../assets/img/programs/pg6.jpg";

const Programs = () => {
  return (
    <div id="programs">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Our Programs</h3>
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="programs.css" />

      <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              class="active dot"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1" class="dot"></li>
            <li data-target="#myCarousel" data-slide-to="2" class="dot"></li>
            <li data-target="#myCarousel" data-slide-to="3" class="dot"></li>
            <li data-target="#myCarousel" data-slide-to="4" class="dot"></li>
            <li data-target="#myCarousel" data-slide-to="5" class="dot"></li>
          </ol>

          <div class="carousel-inner text-center">
            <div class="item active">
              <img
                class="text-center"
                src={pg1}
                alt="Image not found"
              />
            </div>

            <div class="item">
              <img
                src={pg2}
                alt="Image not found"
              />
            </div>

            <div class="item">
              <img
                src={pg3}
                alt="Image not found"
              />
            </div>

            <div class="item">
              <img
                src={pg4}
                alt="Image not found"
              />
            </div>

            <div class="item">
              <img
                src={pg5}
                alt="Image not found"
              />
            </div>

            <div class="item">
              <img
                src={pg6}
                alt="Image not found"
              />
            </div>
          </div>

          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Programs;
