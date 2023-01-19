import { useEffect } from "react";
import { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([])
  async function blogHandler() {
    try {
      // const response = await fetch("https://fien-backend.herokuapp.com/blog/");
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/blog/`
      );
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const data = await response.json();
      setPosts(data)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    blogHandler()
  }, []);


  console.log(posts);
  
  const blog = (
    <div className="row row-bottom-padded-md">
      {posts.map((post) => (
        <div className="col-lg-4 col-md-4 col-sm-6 blog-item" key={post.id}>
          <div className="blog animate-box">
            <a href={`/blog/` + post.id}>
              <img
                className="img-responsive"
                src={'https://' + post.image}
                alt=""
              />
            </a>
            <div className="blog-text">
              <div className="prod-title">
                <h3>
                  <a href={`/blog/` + post.id}>{post.title}</a>
                </h3>
                <span className="posted_by">{post.date}</span>
                <p>{post.content.slice(0, 120) + "..."}</p>
                <p>
                  <a href={`/blog/` + post.id}>Learn More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div id="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Our students' stories</h3>
          </div>
        </div>
      </div>
      <div className="container">{blog}</div>
    </div>
  );
};

export default Blog;
