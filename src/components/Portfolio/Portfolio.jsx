import React from 'react'
import "./Portfolio.css"
import SwiperCore, { Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import Sidebar from "../../images/sidebar.png"
import Ecommerce from "../../images/ecommerce.png"
import HOC from "../../images/hoc.png"
import MusicApp from "../../images/musicapp.png"
import "swiper/css"
import { themeContext } from '../../Context'
import { useContext } from 'react'


SwiperCore.use([Navigation, Pagination]);
const Portfolio = () => {
  const breakpoints = {
    480: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio
