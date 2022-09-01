import React from "react";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Detail from "./Routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Components/IntroPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroPage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
