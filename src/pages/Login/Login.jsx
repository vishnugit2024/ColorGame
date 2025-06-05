import React from "react";
import logo from "../../assets/KWG.png";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <> 
      {/* <div className="login-header">
        <i className="bi bi-chevron-left caret-icon"></i>
        <img src={logo} alt="logo" className="before-login-logo" />
      </div> */}

      <div className="login-text">
        <h5>Log in</h5>
        <p>Please log in with your phone number or email</p>
        <p>If you forget your password, please contact customer service</p>
      </div>
      <div className="login-container">
        <div className="login-box">
          <i className="bi bi-phone login-icon"></i>
          <h5 className="login-title">Log in with phone</h5>
          <hr className="login-divider" />

          {/* Phone Input */}
          <div className="input-label">
            <i className="bi bi-phone icon-left"></i> Phone number
          </div>
          <div className="phone-input-wrapper">
            <div className="country-code">+91</div>
            <input
              type="tel"
              placeholder="Please enter the phone number"
              className="input-field"
            />
          </div>

          {/* Password Input */}
          <div className="input-label">
            <i className="bi bi-lock-fill icon-left"></i> Password
          </div>
          <div className="password-input-wrapper">
            <input
              type="password"
              placeholder="Please enterPassword"
              className="input-field"
            />
            <i className="bi bi-eye-slash password-toggle"></i>
          </div>

          {/* Login Button */}
          <button className="login-button">Log in</button>

          {/* Register Button */}
          <button className="register-button">Register</button>

          {/* Bottom Links */}
          <div className="bottom-links">
            <Link to="/forget-Password" className="text-decoration-none">
              <div className="link-item">
                <i className="bi bi-lock-fill"></i>
                <span>Forgot password</span>
              </div>
            </Link>

            <div className="link-item">
              <i className="bi bi-person-circle"></i>
              <span>Customer Service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
