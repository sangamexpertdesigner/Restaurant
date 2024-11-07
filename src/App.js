import "./App.css";
import "./CSS/Style.css";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Product from "./Component/Product";
import Review from "./Component/Review";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
