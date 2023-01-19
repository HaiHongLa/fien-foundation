import "./ProgramPost.css";
import { useState, useCallback, useEffect } from "react";

const ProgramPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    image: "",
  });
  const [readMore, setReadMore] = useState([]);
  const fetchPost = useCallback(async () => {
    // const response = await fetch(
    //   "https://fien-backend.herokuapp.com/programs/"
    // );
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/programs/`
        );
    const data = await response.json();
    let rm = [];
    for (const p in data) {
      if (String(data[p].id) === props.id) {
        setPost(data[p]);
      } else {
        rm.push({
          id: data[p].id,
          title: data[p].title,
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
    <div className="program-post">
      <div id="header">
        <h1>{post.title}</h1>
      </div>
      <div id="wrapper">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12">
            <div id="content">
              <div className="text-center">
                <img
                  className="ss-image program-img"
                  src={"https://" + post.image}
                  alt={post.title}
                />
              </div>
              <p>{post.content}</p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div id="navigation">
              <h3 className="read-more">Other programs</h3>
              <ul className="more-stories text-center">
                {readMore.map((post) => (
                  <li key={post.id}>
                    <a href={`/programs/` + post.id}>{post.title}</a>
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
export default ProgramPost;
