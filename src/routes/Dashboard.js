import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about/About";
import CoinDetail from "../components/coins/CoinDetail";
import Coins from "../components/coins/Coins";
import PageNotFound from "../components/error/PageNotFound";
import Footer from "../components/footer/Footer";
import Contact from "../components/footer/Contact";
import Support from "../components/footer/Support";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Nav from "../components/navbar/Nav";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
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
