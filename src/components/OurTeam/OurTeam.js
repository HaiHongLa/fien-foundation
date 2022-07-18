import React, { useState } from "react";
import "./OurTeam.css";
import { useEffect } from "react";

const OurTeam = () => {
  const [memberComp, setMemberComp] = useState(<React.Fragment />);
  async function memberHandler() {
    try {
      const response = await fetch(
        "https://fien-backend.herokuapp.com/members/"
      );
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const data = await response.json();
      let memberLists = [];
      for (let i = 0; i < data.length; i = i + 4) {
        if (i + 4 < data.length) {
          memberLists.push(data.slice(i, i + 4));
        } else {
          memberLists.push(data.slice(i, data.length));
        }
      }
      let memComp = memberLists.map((l) => {
        return (
          <ul key={Math.random()} className="row">
            {l.map((member) => {
              return (
                <li className="col-12 col-md-6 col-lg-3" key={member.id}>
                  <div
                    className="cnt-block equal-hight"
                    style={{ height: "349px" }}
                  >
                    <figure>
                      <img src={member.image} className="img-responsive" alt="" />
                    </figure>
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        );
      });
      setMemberComp(memComp);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    memberHandler();
  }, []);

  return (
    <section id="team" className="our-team padding-lg">
      <div id="our-team"></div>
      <div className="container-fluid">
        <div className="row heading heading-icon">
          <h2>Meet our team</h2>
        </div>
        {memberComp}
      </div>
    </section>
  );
};

export default OurTeam;
