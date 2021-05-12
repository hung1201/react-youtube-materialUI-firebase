import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="app__page">
          <Switch>
            <Route exact path="/">
              <Videos />
            </Route>
            <Route exact path="/search/:keyword">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
