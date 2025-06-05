import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import testimonial from "../../assets/testi5.jpg";

const winners = [
  { name: "MEMBERTRU", amount: "₹332445", image: testimonial },
  { name: "RAJ_WINNER", amount: "₹150230", image: testimonial },
  { name: "LUCKY456", amount: "₹85420", image: testimonial },
  { name: "PLAYERX", amount: "₹204400", image: testimonial },
  { name: "AMIT_TOP", amount: "₹192000", image: testimonial },
  { name: "KIRAN_GOLD", amount: "₹284300", image: testimonial },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h5 className="testimonial-title">
          <span className="dot"></span> Today's earnings chart
        </h5>
      </div>

      <div className="testimonial-slider-wrapper">
        <div className="slider-inner">
          <Swiper
            direction="vertical"
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            // autoplay={false}
            speed={800}
            modules={[Autoplay]}
          >
            {winners.map((winner, index) => (
              <SwiperSlide key={index}>
                <div className="winner-card">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="winner-img"
                  />
                  <div className="winner-info">
                    <h6 className="winner-name">{winner.name}</h6>
                    <div className="winner-amount">
                      <strong>Receive {winner.amount}</strong>
                      <p>Winning amount</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
