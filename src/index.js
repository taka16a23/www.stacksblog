import React, { Suspense, lazy } from "react";

import ReactDOM from "react-dom/client";

import Spinner from "components/spinner/Spinner";
import axiosSetup from "helpers/interceptors";
import "assets/scss/style.min.css";

// setup axios
axiosSetup()

const App = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("./app")), 0);
}));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>
)
