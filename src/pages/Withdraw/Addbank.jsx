import React from "react";
import "./Addbank.css";
import addbankinfo from "../../assets/addbankinfo.png";

const Addbank = () => {
  return (
    <div className="bind-form">
      <div className="warning-box">
        <img src={addbankinfo} alt="icon" />
        To ensure the safety of your funds, please bind your bank account
      </div>

      <div className="add-bank-form">
        <div className="form-group">
          <label>
            <span aria-label="bank">
              <i class="bi bi-bank"></i>
            </span>{" "}
            Choose a bank
          </label>
          <select className="form-control bank-choose">
            <option value="">Please select a bank</option>

            <optgroup label="Public Sector Banks">
              <option>State Bank of India</option>
              <option>Bank of Baroda</option>
              <option>Punjab National Bank</option>
              <option>Canara Bank</option>
              <option>Union Bank of India</option>
              <option>Bank of India</option>
              <option>Indian Bank</option>
              <option>Central Bank of India</option>
              <option>Indian Overseas Bank</option>
              <option>UCO Bank</option>
              <option>Bank of Maharashtra</option>
              <option>Punjab & Sind Bank</option>
            </optgroup>

            <optgroup label="Private Sector Banks">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Kotak Mahindra Bank</option>
              <option>IndusInd Bank</option>
              <option>Yes Bank</option>
              <option>IDFC FIRST Bank</option>
              <option>Federal Bank</option>
              <option>South Indian Bank</option>
              <option>RBL Bank</option>
              <option>Bandhan Bank</option>
              <option>Karur Vysya Bank</option>
              <option>City Union Bank</option>
              <option>DCB Bank</option>
              <option>CSB Bank</option>
              <option>Jammu & Kashmir Bank</option>
              <option>South Indian Bank</option>
              <option>Tamilnad Mercantile Bank</option>
              <option>ING Vysya Bank</option>
              <option>Lakshmi Vilas Bank</option>
            </optgroup>

            <optgroup label="Small Finance Banks">
              <option>AU Small Finance Bank</option>
              <option>Equitas Small Finance Bank</option>
              <option>Ujjivan Small Finance Bank</option>
              <option>Jana Small Finance Bank</option>
              <option>Fincare Small Finance Bank</option>
              <option>ESAF Small Finance Bank</option>
              <option>Suryoday Small Finance Bank</option>
              <option>North East Small Finance Bank</option>
              <option>Utkarsh Small Finance Bank</option>
              <option>Capital Small Finance Bank</option>
            </optgroup>
          </select>
        </div>

        <div className="form-group">
          <label>
            <span aria-label="user">
              <i class="bi bi-person-fill"></i>
            </span>{" "}
            Full recipient’s name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter the recipient’s name"
          />
        </div>

        <div className="form-group">
          <label>
            <span aria-label="card">
              <i class="bi bi-credit-card-2-back-fill"></i>
            </span>{" "}
            Bank account number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter your bank account number"
          />
        </div>

        <div className="form-group">
          <label>
            <span aria-label="phone">
              <i class="bi bi-phone-fill"></i>
            </span>{" "}
            Phone number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>
            <span aria-label="email">
              <i class="bi bi-envelope-arrow-down-fill"></i>
            </span>{" "}
            Mail
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Please input your email"
          />
        </div>

        <div className="form-group">
          <label>
            <span aria-label="key">
              <i class="bi bi-key-fill"></i>
            </span>{" "}
            IFSC Code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter IFSC code"
          />
        </div>
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
};

export default Addbank;
