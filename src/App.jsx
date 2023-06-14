import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ResourcesDisplay from "./components/resources/ResourcesDisplay";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route exact path="/resources">
            <Header />
            <ResourcesDisplay />
            <Footer />
          </Route>

          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
