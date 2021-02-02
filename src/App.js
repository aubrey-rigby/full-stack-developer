import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound"
import Container from "./components/Container"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Container>
            <Route exact path="/full-stack-developer">
              <About />
            </Route>
            <Route exact path="/full-stack-developer/portfolio">
              <Portfolio />
            </ Route>
            <Route exact path="/*">
              <NotFound />
            </ Route>  
          </Container>
          <Footer />
        </Wrapper>
      </div>
    </Router>
    
  );
}

export default App;
