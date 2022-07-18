// import Posts from "./Posts";
import "./BlogPost.css";
import { useState, useEffect, useCallback } from "react";


const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
    image: "",
  });
  const [readMore, setReadMore] = useState([]);
  const fetchPost = useCallback(async () => {
    const response = await fetch("https://fien-backend.herokuapp.com/blog/");
    const data = await response.json();
    let rm = [];
    for (const p in data) {
      if (String(data[p].id) === props.id) {
        setPost(data[p]);
      } else {
        rm.push({
          id: data[p].id,
          title: data[p].title,
          date: data[p].date,
          content: data[p].content,
          image: data[p].image,
        });
      }
    }
    setReadMore(rm);
  }, [props.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <div className="blog-post">
      <div id="header">
        <h1>{post.title}</h1>
      </div>
      <h4 className="post-date">{post.date}</h4>
      <div id="wrapper">
        <div className="row">
          <div className="col-md-9">
            <div id="content">
              <div className="text-center">
                <img className="ss-image" src={post.image} alt="ss1" />
              </div>
              <p>{post.content}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div id="navigation">
              <h4 className="read-more text-center">Read more stories</h4>
              <ul className="more-stories text-center">
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
