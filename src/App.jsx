import React from "react";
import Page1 from "./pages/page1";
import Header from "./components/header";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <div id="main">
          <Header />
          <Page1 />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
