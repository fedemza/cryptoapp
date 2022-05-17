import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/about/About";
import CoinDetail from "../components/coins/CoinDetail";
import Coins from "../components/coins/Coins";
import PageNotFound from "../components/error/PageNotFound";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Nav from "../components/navbar/Nav";

const Dashboard = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinDetail />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Dashboard;
