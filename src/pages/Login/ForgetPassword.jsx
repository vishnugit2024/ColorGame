import React from "react";
import logo from "../../assets/KWG.png";
import "./Login.css";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      {/* <div className="login-header">
        <Link to={"/login"}>
          <i className="bi bi-chevron-left caret-icon"></i>
        </Link>
        <img src={logo} alt="logo" className="before-login-logo" />
      </div> */}

      <div className="login-text">
        <h5>Forgot password</h5>
        <p>
          Please retrieve/change your password through your mobile phone number
          or email
        </p>
      </div>
      <div className="login-container">
        <div className="login-box">
          <i className="bi bi-phone login-icon"></i>
          <h5 className="login-title">Reset Password</h5>
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
            <i className="bi bi-lock-fill icon-left"></i>A new password
          </div>
          <div className="password-input-wrapper">
            <input
              type="password"
              placeholder="New Password"
              className="input-field"
            />
            <i className="bi bi-eye-slash password-toggle"></i>
          </div>

          <div className="input-label">
            <i className="bi bi-lock-fill icon-left"></i>Confirm new password
          </div>
          <div className="password-input-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
            />
            <i className="bi bi-eye-slash password-toggle"></i>
          </div>

          <div className="input-label">
            <i className="bi bi-shield-lock-fill icon-left"></i>Verification Code
          </div>
          <div className="password-input-wrapper">
            <input
              type="text"
              placeholder="Please Enter the confirmation code"
              className="input-field"
            />
            <i className="bi bi-eye-slash password-toggle"></i>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="privacy-checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button className="login-button">Reset</button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
