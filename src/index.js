import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.js";
import Launch from "./pages/Launch.js";
import LaunchIndex from "./components/LaunchIndex.js";
import LaunchShoe from "./components/LaunchShoe.js";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <Router>
    <App>
      <Routes>
        <Route path="home" exact element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </App>
  </Router>,
  document.getElementById("root")
);
