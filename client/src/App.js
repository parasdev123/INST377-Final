import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import NoMatch from "./components/pages/NoMatch";
import PoliceStation from "./components/Maps/PoliceStation";
import FireStation from "./components/Maps/FireStation";
import Libraries from "./components/Maps/Libraries";
import RecCenter from "./components/Maps/RecCenter";
import CustomNavbar from "./components/CustomNavbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Router>
            <CustomNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pages/about" component={About} />
              <Route exact path="/pages/contactus" component={ContactUs} />
              <Route component={NoMatch} /> }
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
