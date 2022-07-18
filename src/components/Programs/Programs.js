import "./Programs.css";
import { useState, useEffect } from "react";

const Programs = () => {
  const [posts, setPosts] = useState([]);
  async function programHandler() {
    try {
      const response = await fetch(
        "https://fien-backend.herokuapp.com/programs/"
      );
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    programHandler();
  }, []);

  const programs = (
    <div className="row row-bottom-padded-md">
      {posts.map((post) => (
        <div key={post.id} className="col-lg-4 col-md-4 col-sm-6 program-item">
          <div className="program animate-box">
            <a href={`/programs/` + post.id}>
              <img className="img-responsive" src={post.image} alt="" />
            </a>
            <div className="program-text">
              <div className="prod-title">
                <h3>
                  <a href={`/programs/` + post.id}>{post.title}</a>
                </h3>
                <p className="program-content">
                  {post.content.slice(0, 130) + "..."}
                </p>
                <p>
                  <a href={`/programs/` + post.id}>Learn More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="programs-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Our programs</h3>
          </div>
        </div>
      </div>
      <div className="container">
        {programs}
      </div>
    </div>
  );
};
export default Programs;
