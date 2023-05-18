import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import App from "./pages/App";
import SignIn from "./pages/SingIn";
import { Provider } from "react-redux";
import store from "./store";


import "./index.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/">

        
          <Route index element={ <SignIn/> } />
          <Route path="tableros" element={<App />} />
        

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  ,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();