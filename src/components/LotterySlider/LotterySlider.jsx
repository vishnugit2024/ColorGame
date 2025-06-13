// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import WinGo from "../../assets/wingo.png";
import ludo from "../../assets/Ludo.png";
import "swiper/css";
import "swiper/css/navigation";
import "./LotterySlider.css";
import { Link } from "react-router-dom"; // or 'next/link' if using Next.js

// Dummy Game Data
const games = [
  {
    title: "Win Go",
    image: WinGo,
    link: "/wingo",
  },
  {
    title: "K3",
    image: ludo,
    link: "/k3DiceGame",
  },
  {
    title: "Win Go",
    image: WinGo,
    link: "/wingo",
  },
  {
    title: "Lucky Ball",
    image: ludo,
    link: "/k3DiceGame",
  },
];

const LotterySlider = () => {
  return (
    <div className="lottery-section">
      <div className="lottery-header d-flex justify-content-between align-items-center mb-3">
        <h5 className="lottery-title">
          <span className="dot"></span> Lottery
        </h5>
        <button className="view-all-btn">All {games.length} &gt;</button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        loop={true}
        // autoplay={{ delay: 2000 }}
        autoplay={false}
        className="lottery-slider"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <Link to={game.link} className="Lottery-game-card">
              <h6 className="Lottery-game-title">{game.title}</h6>
              <img
                src={game.image}
                alt={game.title}
                className="Lottery-game-img"
              />
              <button className="go-btn">
                GO <span>&gt;</span>
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LotterySlider;
