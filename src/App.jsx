import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import "./style/header.css";
import "./style/button.css";
import "./style/section.css";
import "./style/card.css";
import "./style/blog.css";
import "./style/hero.css";
import "./style/article.css";
import "./style/footer.css";
import Header from "./components/Header";
// import Home from "./components/Home";
import Blog from "./components/Blog";
import SinglePost from "./components/SinglePost";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Blog />} path="/" />
          <Route element={<SinglePost />} path="/blog/:slug" />
          <Route element={<Blog />} path="/blog" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
