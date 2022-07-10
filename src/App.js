import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import Footer from "./components/Footer/Footer";
import ProgramsPage from "./pages/ProgramsPage";
import CareersPage from "./pages/CareersPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/blog/:postId">
          <BlogPostPage />
        </Route>
        <Route path="/programs" exact>
          <ProgramsPage />
        </Route>
        <Route path="/careers" exact>
          <CareersPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
