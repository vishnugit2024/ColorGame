import React from "react";
import "./Activity.css";
import activity1 from "../../assets/activity1.png";
import activity2 from "../../assets/activity2.png";
import activity3 from "../../assets/activity3.png";
import activity4 from "../../assets/activity4.png";
import activity5 from "../../assets/activity5.png";
import activity6 from "../../assets/activity6.png";
const Activity = () => {
  const gridItems = [
    {
      title: "Reward Center",
      img: activity1,
    },
    {
      title: "Invitation Bonus",
      img: activity2,
    },
    {
      title: "Gift Code",
      img: activity3,
    },
    {
      title: "Customer Support",
      img: activity4,
    },
  ];

  return (
    <>
      <div className="login-text">
        <h5>Activity</h5>
        <p>Please remember to follow the event page</p>
        <p>We will launch user feedback activities from time to time</p>
      </div>
      <div className="lucky-container">
        <div className="grid-card">
          {gridItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} className="grid-image" />
              </div>
              <div className="grid-title">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="banner-card">
          <img
            src={activity5}
            alt="KWG Lucky Roulette"
            className="banner-image"
          />
          <p className="banner-caption">Become Agent Enjoy Luxury Rewards</p>
        </div>
        <div className="banner-card">
          <img
            src={activity6}
            alt="KWG Lucky Roulette"
            className="banner-image"
          />
          <p className="banner-caption">New Member First Deposit Bonus</p>
        </div>
      </div>
    </>
  );
};

export default Activity;
