// reservaciones are EventS
// reservados are bookings

import React, { Component } from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

// import { Routes, Route } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./pages/Contact";
import Booknow from "./pages/Booknow";
import AuthPage from "./pages/Auth";
import AuthContext from "./authContext/auth-context";
// import bookings from "./pages/bookings";
// import events from "./pages/events";
import SuperBookings from "./pages/SuperBookings";
import Covidinfo from "./pages/Covidinfo";
import Guia from "./pages/Guia";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

class App extends Component {
  // login;
  state = {
    token: null,
    userId: null,
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    //matomo tra cking
    // const instance = createInstance({
    //   urlBase: "https://www.alquilerdeconchitayalex.com/",
    //   siteId: 3,
    //   // userId: "UID76903202", // optional, default value: `undefined`.
    //   // trackerUrl: "https://LINK.TO.DOMAIN/tracking.php", // optional, default value: `${urlBase}matomo.php`
    //   // srcUrl: "https://LINK.TO.DOMAIN/tracking.js", // optional, default value: `${urlBase}matomo.js`
    //   disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
    //   heartBeat: {
    //     // optional, enabled by default
    //     active: true, // optional, default value: true
    //     seconds: 10, // optional, default value: `15
    //   },
    //   // linkTracking: false, // optional, default value: true
    //   // configurations: {
    //   // optional, default value: {}
    //   // any valid matomo configuration, all below are optional
    //   //   disableCookies: true,
    //   //   setSecureCookie: true,
    //   //   setRequestMethod: "POST",
    //   // },
    // });
    return (
      <>
        {/* <MatomoProvider value={instance}> */}
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userId: this.state.userId,
            login: this.login,
            logout: this.logout,
          }}
        >
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Covidinfo" component={Covidinfo} />

            <Route exact path="/Terms" component={Terms} />
            <Route exact path="/Privacy" component={Privacy} />

            {/* <Route exact path="/bookings" component={bookings} /> */}
            {this.state.token && (
              <Route exact path="/SuperBookings" component={SuperBookings} />
            )}
            {/* {this.state.token && (
              <Route exact path="/events" component={events} />
            )} */}
            {this.state.token && <Route exact path="/Guia" component={Guia} />}
            {!this.state.token && (
              <Redirect from="/SuperBookings" to="/auth" component={AuthPage} />
            )}

            {!this.state.token && (
              <Route exact path="/auth" component={AuthPage} />
            )}
            {/* {this.state.token && (
              <Redirect from="/auth" to="/bookings" component={AuthPage} />
            )} */}
            {this.state.token && (
              <Redirect from="/auth" to="/Guia" component={Guia} />
            )}
            {!this.state.token && (
              <Redirect from="/Guia" to="/auth" component={AuthPage} />
            )}

            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/booknow/:slug" component={Booknow} />

            <Route component={Error} />
          </Switch>

          {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes> */}
        </AuthContext.Provider>
        {/* </MatomoProvider> */}
      </>
    );
  }
}

export default App;
