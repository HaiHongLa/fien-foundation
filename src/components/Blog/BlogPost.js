import Posts from "./Posts";
import "./BlogPost.css";

const BlogPost = (props) => {
  const postId = props.id;
  let post = null;
  for (let i = 0; i < Posts.length; i++) {
    if (Posts[i].id === postId) {
      post = Posts[i];
    }
  }
  let readMore = [];
  for (let i = 0; i < Posts.length; i++) {
    const element = Posts[i];
    if (element.id !== postId) {
      readMore.push(element);
    }
  }

  return (
    <div class="blog-post">
      <div id="header">
        <h1>{post.title}</h1>
      </div>
      <h4 class="post-date">{post.date}</h4>
      <div id="wrapper">
        <div class="row">
          <div class="col-md-9">
            <div id="content">
              <div class="text-center">
                <img class="ss-image" src={post.img} alt="ss1" />
              </div>
              <p>{post.content}</p>
            </div>
          </div>
          <div class="col-md-3">
            <div id="navigation">
              <h4 class="read-more text-center">Read more stories</h4>
              <ul class="more-stories text-center">
                {readMore.map((post) => (
                  <li key={post.id}>
                    <a href={`/blog/` + post.id}>{post.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
