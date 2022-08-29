import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                heading="Top Headlines "
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                heading="Top Business Headlines "
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                heading="Top Entertainment Headlines "
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                heading="Top Health Headlines "
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                heading="Top Science Headlines Science"
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                heading="Top Sports Headlines "
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                heading="Top Technology Headlines "
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
