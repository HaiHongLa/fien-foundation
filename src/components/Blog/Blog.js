import "./Blog.css";
import Posts from "./Posts";

const Blog = () => {
  const blog = (
    <div className="row row-bottom-padded-md">
      {Posts.map((post) => (
        <div className="col-lg-4 col-md-4 col-sm-6" key={post.id}>
          <div class="blog animate-box">
            <a href="#">
              <img class="img-responsive" src={post.img} alt="" />
            </a>
            <div class="blog-text">
              <div class="prod-title">
                <h3>
                  <a href="">{post.title}</a>
                </h3>
                <span class="posted_by">{post.date}</span>
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
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Our students' stories</h3>
          </div>
        </div>
      </div>
      <div class="container">{blog}</div>
    </div>
  );
};

export default Blog;
