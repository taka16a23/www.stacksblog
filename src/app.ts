import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { createBrowserHistory } from "history";

import enJson from "locales/en.json";
import jaJson from "locales/ja.json";
import Layout from "layouts/Layout";
import ScrollToTop from "helpers/ScrollToTop";


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

const History = createBrowserHistory({ basename: "/" });


export default class App extends Component {
  render() {
    return (
      <BrowserRouter history={History}>
        <ScrollToTop/>
        <Routes>
          <Route path="*" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
