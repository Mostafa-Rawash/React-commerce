import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';



const sponsorList = [
  {
    imgUrl: "/src/assets/images/sponsor/01.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/02.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/03.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/04.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/05.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/06.png",
  },
];
import { Autoplay } from 'swiper/modules';



function Sponsor() {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                640:{
                  slidesPerView:1,
                  spaceBetween:20,
                },768:{
                  slidesPerView:3,
                  spaceBetween:40,
                },1024:{
                  slidesPerView:4,
                  spaceBetween:50,
                },
              }}
              autoplay={
                {
                  delay:2000,
                  disableOnInteraction: false,
                }
              }
              modules={[Autoplay]}
              className="mySwiper"
            >
              {
                sponsorList.map((val, i) =>
                  <SwiperSlide key={i}><img src={val.imgUrl} alt={val.imgUrl} /></SwiperSlide>
                )
              }
            </Swiper>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor