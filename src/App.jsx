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

import Deposite from "./pages/Deposite/Deposite";
import Withdraw from "./pages/Withdraw/Withdraw";
import Addbank from "./pages/Withdraw/Addbank";
import BetHistory from "./pages/BetHistory/BetHistory";

import DepositHistory from "./pages/DepositHistory/DepositHistory";
import WithdrawHistory from "./pages/WithdrawHistory/WithdrawHistory";

import Support from "./pages/Support/Support";
import SubmitIssue from "./pages/SubmitIssue/SubmitIssue";
import About from "./pages/About/About";
import ConfidentialityAgreement from "./pages/About/ConfidentialityAgreement";
import RiskDisclosureAgreement from "./pages/About/RiskDisclosureAgreement";

import WingoMain from "./pages/wingo/wingomain";
import ReferralCommission from "./pages/Promotion/ReferralCommission";
import Tutorial from "./pages/Promotion/tutorial";
import TranscationHistory from "./pages/TranscationHistory/TranscationHistory";
import K3DiceGame from "./pages/K3Game/K3DiceGame";

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
          <Route path="/deposit" element={<Deposite />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/addbank" element={<Addbank />} />
          <Route path="/betHistory" element={<BetHistory />} />
          <Route path="/depositHistory" element={<DepositHistory />} />
          <Route path="/withdrawHistory" element={<WithdrawHistory />} />

          <Route path="/support" element={<Support />} />
          <Route path="/submitIssue" element={<SubmitIssue />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/confidentialityAgreement"
            element={<ConfidentialityAgreement />}
          />
          <Route
            path="/riskDisclosureAgreement"
            element={<RiskDisclosureAgreement />}
          />
          <Route path="/transcationHistory" element={<TranscationHistory />} />
          <Route path="/referralCommission" element={<ReferralCommission />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/k3DiceGame" element={<K3DiceGame />} />

          <Route path="/wingo" element={<WingoMain />} />
        </Routes>
        <BottomNav />
      </div>
    </>
  );
};

export default App;
