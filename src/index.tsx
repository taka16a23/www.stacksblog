import React, { Suspense, lazy } from "react";

import ReactDOM from "react-dom/client";

import "assets/scss/style.min.css";
import Spinner from "components/spinner/Spinner";
import axiosSetup from "helpers/interceptors";
const App = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("./app")), 0);
}));

// setup axios
axiosSetup()


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback={<Spinner/>}>
    <App/>
  </Suspense>
)
