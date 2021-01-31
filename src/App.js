import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </ Route>
          <Route exact path="/*">
            <NotFound />
          </ Route>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
