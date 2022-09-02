import React from "react";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import IntroPage from "../Components/IntroPage";
import MainPage from "../Components/MainPage";

export default function Home() {
  return (
    <>
      <Header />
      <IntroPage />
      <MainPage />
      <Footer />
    </>
  );
}
