import React from "react";
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousal.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start px-3 py-4">
        <h3 className={
          `text-2xl font-bold ${props.isdark ? "text-white" : "text-gray-800"
          }`
        }>{props.title}</h3>
        <p className={
          `text-sm ${props.isdark ? "text-white" : "text-gray-800"
          }`
        }>{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isdark={props.isdark} />
        ))}
      </Slider>
    </>
  )
}

export default PosterSlider;