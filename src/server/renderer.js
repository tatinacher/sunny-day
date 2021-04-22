import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ServerStyleSheet } from "styled-components";

import { cityReducer } from "../features/cities";
import { App } from "../App";
import { cities } from "./initial-data";
import { units } from "../lib/constants";

const fetch = require("node-fetch");

require("dotenv").config();

const createStore = (result) =>
  configureStore({
    reducer: {
      cities: cityReducer,
    },
    preloadedState: {
      cities: result,
    },
  });

const createPage = (req, store) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );
  const styleTags = sheet.getStyleTags();
  const preloadedState = store.getState();

  return `<!DOCTYPE html>
              <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  ${styleTags}
                  </head>
              <body>
                  <div id="root">${content}</div>
                  <script> window.__PRELOADED_STATE__ = ${JSON.stringify(
                    preloadedState
                  ).replace(/</g, "\\u003c")}</script>
                  <script src="/bundle.js"></script>
              </body>
      </html>`;
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const mainPage = (req, res) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${
      cities[randomNumber(0, cities.length)].name
    }&appid=${process.env.WEATHER_API_KEY}&units=${units.metric.name}`
  )
    .then((res) => res.json())
    .then((result) => createStore(result))
    .then((store) => createPage(req, store))
    .then((render) => res.send(render));

// const pages = {
//   "/": mainPage,
// };

export const renderer = (req, res) => {
  mainPage(req, res);
};
