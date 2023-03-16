import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import profile1 from "../../images/profile1.jpg"
import profile2 from "../../images/profile2.jpg";
import profile3 from "../../images/profile3.jpg";
import profile4 from "../../images/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere debitis quidem dolorum sint, asperiores perspiciatis quod obcaecati natus velit aliquid adipisci odit similique, minima numquam quos cupiditate, ex voluptate?",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere debitis quidem dolorum sint, asperiores perspiciatis quod obcaecati natus velit aliquid adipisci odit similique, minima numquam quos cupiditate, ex voluptate?",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere debitis quidem dolorum sint, asperiores perspiciatis quod obcaecati natus velit aliquid adipisci odit similique, minima numquam quos cupiditate, ex voluptate?",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere debitis quidem dolorum sint, asperiores perspiciatis quod obcaecati natus velit aliquid adipisci odit similique, minima numquam quos cupiditate, ex voluptate?",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials" >
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          clients.map((client, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default Testimonial;
