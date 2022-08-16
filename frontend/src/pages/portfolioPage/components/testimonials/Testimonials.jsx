import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Mia khalifa",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate hic nemo, beatae aspernatur distinctio amet necessitatibus accusantium, nihil quis fuga harum, assumenda voluptates consectetur vitae odit esse eum ipsam?",
  },
  {
    avatar: AVTR2,
    name: "Mekonnen Alemu",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate hic nemo, beatae aspernatur distinctio amet necessitatibus accusantium, nihil quis fuga harum, assumenda voluptates consectetur vitae odit esse eum ipsam?",
  },
  {
    avatar: AVTR3,
    name: "Melak Gedefaye",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate hic nemo, beatae aspernatur distinctio amet necessitatibus accusantium, nihil quis fuga harum, assumenda voluptates consectetur vitae odit esse eum ipsam?",
  },
  {
    avatar: AVTR4,
    name: "Halle Hayes",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate hic nemo, beatae aspernatur distinctio amet necessitatibus accusantium, nihil quis fuga harum, assumenda voluptates consectetur vitae odit esse eum ipsam?",
  },
];

const Experience = () => {
  return (
    <div>
      <section id="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Experience;
