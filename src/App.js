import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product1 from "./Components/Products/Product1";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/nikon_z7">
            <Product1 />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
