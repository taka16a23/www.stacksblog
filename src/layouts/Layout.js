import React, { Component, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import _const from 'const';
import Header from "components/Header";
import CategoriesLayout from "layouts/CategoriesLayout";
const Error403 = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("pages/errors/Error403")), 0);
}));


export default class Layout extends Component {

  render() {
    return (
      <>
        <Header/>
        <Routes>
          <Route exact={true} path={_const.Routes.Error403} element={<Error403/>}/>
          <Route path="*" element={<CategoriesLayout/>}/>
        </Routes>
      </>
    )
  }
}
