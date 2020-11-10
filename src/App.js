import './App.css';
import { Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Route  , Switch} from "react-router-dom";
import SideBar from "./Components/SideBar"
import Main from "./Components/Main"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Resume from "./Components/Resume"
import Portfolio from "./Components/Portfolio"

function App() {
  return (
  <div>
      <Router>
        <Row>
          <Col xl={4} id="sidebar-wrapper">
              <SideBar/>
          </Col>
          <Col xl={8} id="page-content-wrapper">
             <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
             <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
             <Route exact path="/resume">
              <Resume/>
            </Route>
          </Switch>
          </Col>
        </Row>
        {/* <div id="sidebar">
        <SideBar/>
  </div>
        <div id="main-content">
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
             <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
             <Route exact path="/resume">
              <Resume/>
            </Route>
          </Switch>
     
  </div>  */}
      </Router>
  </div>
    

  );
}

export default App;
