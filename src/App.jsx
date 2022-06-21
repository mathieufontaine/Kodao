import "./style/App.css";
import "./style/header.css";
import "./style/section.css";
import "./style/blog.css";
import "./style/footer.css";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
