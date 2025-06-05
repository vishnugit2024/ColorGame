import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/Login/ForgetPassword";
import Activity from "./pages/Activity/Activity";
import Wallet from "./pages/Wallet/Wallet";
import Account from "./pages/Account/Account";
import BottomNav from "./components/BottomBar/BottomNav";
const App = () => {
  return (
    <>
      <div id="app">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-Password" element={<ForgetPassword />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <BottomNav />
      </div>
    </>
  );
};

export default App;
