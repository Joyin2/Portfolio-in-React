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
import { Link } from 'react-router-dom';

import BulkChoice from "../../images/project-image/bulk-choice.png"
import Color from "../../images/project-image/color.png"
import Md from "../../images/project-image/md-sil.png"
import ToDo from "../../images/project-image/to-do.png"
import UkpNew from "../../images/project-image/ukp-new.png"
import UkpOld from "../../images/project-image/ukp-old.png"
import Diosc from "../../images/project-image/dioscport.png"


SwiperCore.use([Navigation, Pagination]);
const Portfolio = () => {
  const breakpoints = {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
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
          <a href="https://bulkchoice.netlify.app"><img src={BulkChoice} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ukpschool.in/"><img src={UkpOld} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dioscportt.netlify.app/"><img src={Diosc} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://randomcolorgenerator001.netlify.app"><img src={Color} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mdsil.netlify.app"><img src={Md} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://jtodo-crud.netlify.app"><img src={ToDo} alt="" /></a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://ukpschoolreact.netlify.app"><img src={UkpNew} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio
