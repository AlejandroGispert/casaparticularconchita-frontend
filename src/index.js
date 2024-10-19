import React from "react";
import ReactDOM from "react-dom";
// impo{}

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { RoomProvider } from "./context";

import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

//matomo tra cking
const instance = createInstance({
  urlBase: "https://alquilerdeconchitayalex2.matomo.cloud/",
  siteId: 1,
  // userId: "UID76903202", // optional, default value: `undefined`.
  // trackerUrl: "https://LINK.TO.DOMAIN/tracking.php", // optional, default value: `${urlBase}matomo.php`
  // srcUrl: "https://LINK.TO.DOMAIN/tracking.js", // optional, default value: `${urlBase}matomo.js`
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  heartBeat: {
    // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10, // optional, default value: `15
  },
  // linkTracking: false, // optional, default value: true
  // configurations: {
  // optional, default value: {}
  // any valid matomo configuration, all below are optional
  //   disableCookies: true,
  //   setSecureCookie: true,
  //   setRequestMethod: "POST",
  // },
});

// const trackAtConnect = false;

ReactDOM.render(
  <MatomoProvider value={instance}>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </MatomoProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
