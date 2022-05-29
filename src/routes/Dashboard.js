import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about/AboutContainer";
import CoinDetail from "../components/coinDetail/CoinDetailContainer";
import Coins from "../components/coins/CoinsContainer";
import PageNotFound from "../components/error/PageNotFoundContainer";
import Footer from "../components/footer/FooterContainer";
import Contact from "../components/contact/ContactContainer";
import Support from "../components/support/SupportContainer";
import Header from "../components/header/HeaderContainer";
import Home from "../components/home/HomeContainer";
import Nav from "../components/navbar/NavContainer";

const Dashboard = ({ mode, setMode }) => {
  return (
    <div className="container">
      <Header mode={mode} setMode={setMode} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<CoinDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Dashboard;
