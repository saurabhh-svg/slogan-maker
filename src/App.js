import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Features from "./components/features/Features.jsx";
import Products from "./components/products/Products.jsx";
import SloganForm from "./components/slogans/sloganForm/SloganForm.jsx";

const App = () => {
  return (
    <>
      <Header />
      <SloganForm />
      <Features />
      <Products />
      <Footer />
    </>
  );
};

export default App;
