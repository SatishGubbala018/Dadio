import React, { useState } from "react";
import "./Testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


import couple1 from "../../assets/testimonial_couple1.jpg";
import couple2 from "../../assets/testimonial_couple2.jpg";
import couple3 from "../../assets/testimonial_couple3.jpg";
import couple4 from "../../assets/testimonial_couple4.jpg";
import couple5 from "../../assets/testimonial_couple5.jpg";

const testimonials = [
  {
    id: 1,
    image: couple1,
    quote:
      "We heard each other’s voice on Dadio and instantly clicked. Best decision ever!",
    author: "Anya & Rohit",
  },
  {
    id: 2,
    image: couple2,
    quote:
      "Our story started with a simple hello on Dadio. Now we’re inseparable!",
    author: "Sneha & Karan",
  },
  {
    id: 3,
    image: couple3,
    quote: "Can’t believe we found love in an app. Dadio really works!",
    author: "Aisha & Arjun",
  },
  {
    id: 4,
    image: couple4,
    quote:
      "We connected on a deeper level, just by hearing each other’s voices.",
    author: "Neha & Raghav",
  },
  {
    id: 5,
    image: couple5,
    quote: "This app changed our lives. Thank you, Dadio!",
    author: "Pooja & Kabir",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < testimonials.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="testimonial-container overflow-hidden">
      <div className="testimonial-image-con hover:scale-105 transition-transform duration-5000">
        <img
          src={testimonials[current].image}
          alt="couple"
          className="testimonial-image"
        />
      </div>
      <div className="testimonial-content hover:scale-105 transition-transform duration-5000">
        <FaQuoteLeft className="quote-icon" />
        <h1>{testimonials[current].quote}</h1>
        <p>--- {testimonials[current].author}</p>
        <div className="arrow-container">
          <FaArrowLeftLong
            className={`arrow ${current === 0 ? "arrow-disabled" : ""}`}
            onClick={handlePrev}
          />
          <FaArrowRightLong
            className={`arrow ${
              current === testimonials.length - 1 ? "arrow-disabled" : ""
            }`}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
