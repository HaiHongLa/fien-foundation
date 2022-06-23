import React from "react";
import "./OurTeam.css";
import MG from "../../assets/img/team/GEORGE MAGESSA.png";
import AK from "../../assets/img/team/AMINA KIRETI.png"
import LN from '../../assets/img/team/LWIZA NSUMBA.png'
import MC from '../../assets/img/team/MARIA CHARLES.png'
import NS from '../../assets/img/team/NESTORY SALIKA.png'
import SS from '../../assets/img/team/SWIDEFRIDA SAKIA.png'
import BM from '../../assets/img/team/BERTHA MBUYA.png'


const OurTeam = () => {
  return (
    <section id="team" class="our-team padding-lg">
      <div id="our-team"></div>
      <div class="container">
        <div class="row heading heading-icon">
          <h2>Meet our team</h2>
        </div>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={MG} class="img-responsive" alt="" />
              </figure>
              <h3>Magessa George</h3>
              <p>CEO and Founder</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={MC} class="img-responsive" alt="" />
              </figure>
              <h3>Maria Charles</h3>
              <p>Director of Remote Teaching Service</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={AK} class="img-responsive" alt="" />
              </figure>
              <h3>Amina Kireti</h3>
              <p>Director of Internship and Employment Opportunities</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={LN} class="img-responsive" alt="" />
              </figure>
              <h3>Lwisza Nsumba</h3>
              <p>Director of Scholars Program</p>
            </div>
          </li>
        </ul>
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={NS} class="img-responsive" alt="" />
              </figure>
              <h3>Nestory Salika</h3>
              <p>Director of Digital Teachers Exchange Program</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={SS} class="img-responsive" alt="" />
              </figure>
              <h3>Swidefrida Sakia</h3>
              <p>Chief of Finance</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style={{ height: "349px" }}>
              <figure>
                <img src={BM} class="img-responsive" alt="" />
              </figure>
              <h3>Bertha Mbuya</h3>
              <p>Director of Inclusive Education</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
