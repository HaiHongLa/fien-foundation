import { useParams } from "react-router-dom";
import BlogPost from "../components/Blog/BlogPost";

const BlogPostPage = () => {
  const params = useParams();
  const postId = params.postId;
  
  return <BlogPost id={postId} />;
};
export default BlogPostPage;
