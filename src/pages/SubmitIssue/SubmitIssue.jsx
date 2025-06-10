import React from "react";
import "./submitIssue.css";

const banks = [
  "Deposite Not Recived",
  "Withdrawal Problem",
  "Change Bank Name",
  "Change login password",
  "IFSC Modification",
  "Game Problem",
  "Wingo Game Issue",
  "USDT Issue",
  "Avitor Issue",
];

const SubmitIssue = () => {
  return (
    <div className="submitIssue-container">
      <div className="submitIssue-form">
        <div className="submitIssue-form-group">
          <div className="d-flex">
            <span className="dot"></span>
            <label>Activity application</label>
          </div>
          <select className="submitIssue-control">
            <option value="">Select issues</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        <div className="submitIssue-form-group">
          <div className="d-flex">
            <span className="dot"></span>
            <label>Write your issue here</label>
          </div>
          <textarea
            className="submitIssue-control"
            placeholder="Write issue description"
            rows="4"
          />
        </div>

        <div className="submitIssue-form-group">
          <div className="d-flex">
            <span className="dot"></span>
            <label>Upload screenshot here</label>
          </div>
          <input type="file" className="submitIssue-control" />
        </div>
      </div>

      <button className="submitIssue-save-btn">Save</button>
    </div>
  );
};

export default SubmitIssue;
