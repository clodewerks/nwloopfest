import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArtistPage from "./ArtistPage";
import FestsPage from "./FestPage";
import GetInvolvedPage from "./GetInvolvedPage"

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/donate" render={() => (window.location = "https://givebutter.com/2021nwloopfest")} />
        <Redirect from="/about-page" to="about" />
        <Route path = "/artists/" component={ArtistPage} />
        <Route path = "/fests/" component={FestsPage} /> 
        <Route path = "/getinvolved/" component={GetInvolvedPage} /> 
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
