import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ServerStyleSheet } from "styled-components";

import { cityReducer } from "../features/city";
import { App } from "../App";
import { url } from "../lib/initial-data";

const fetch = require("node-fetch");

require("dotenv").config();

const createStore = (result) =>
  configureStore({
    reducer: {
      city: cityReducer,
    },
    preloadedState: {
      city: result,
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

export const cityPage = (req, res) =>
  fetch(url(req.params.id))
    .then((res) => res.json())
    .then((result) => createStore(result))
    .then((store) => createPage(req, store))
    .then((render) => res.send(render));

export const mainPage = (req, res) => {
  const store = createStore();
  const render = createPage(req, store);
  res.send(render);
};
