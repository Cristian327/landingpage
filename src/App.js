import React from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Secondsection from "./components/second-section/secondsection";
import FormBanner from "./components/form-banner/form";
import Faq from "./components/faq/faq";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Secondsection />
      <FormBanner />
      <Faq />
    </div>
  );
}

export default App;
