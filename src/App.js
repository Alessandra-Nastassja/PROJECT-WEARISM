import React from 'react';

import Routes from "./Routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
