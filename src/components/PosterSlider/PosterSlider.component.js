import React from "react";
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousal.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return (
    <div className={`flex flex-col  rounded-md drop-shadow-lg shadow-black ${props.isdark ? " bg-navCol-700" : "bg-gray-200"}`}>

      <h3 className={`text-2xl font-bold p-4 ${props.isdark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
      <p className={`text-sm ${props.isdark ? "text-white " : "text-gray-800 "}`}>{props.subtitle}</p>

      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster
            {...image}
            key={image.id}
            isdark={props.isdark} />
        ))}
      </Slider>
    </div>
  )
}

export default PosterSlider;