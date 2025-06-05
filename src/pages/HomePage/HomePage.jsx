import React from "react";
import Banner from "../../components/Banner/Banner";
import GameCard from "../../components/GameCard/GameCard";
import LotterySlider from "../../components/LotterySlider/LotterySlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WinnerChart from "../../components/WinnerChart/WinnerChart";
import HomeFooter from "../../components/HomeFooter/HomeFooter";

const HomePage = () => {
  return (
    <>
      <Banner />
      <GameCard />
      <LotterySlider />
      <Testimonial />
      <WinnerChart />
      <HomeFooter />
    </>
  );
};

export default HomePage;
