import React from "react";
import "./Banner.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  return (
    <div className="banner-container p-2">
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <div className="carousel-inner rounded-4 overflow-hidden">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 banner-img" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 banner-img" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 banner-img" alt="Banner 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
