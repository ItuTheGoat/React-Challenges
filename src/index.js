import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Router import
import { BrowserRouter } from "react-router-dom";

// Redux Imports
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
