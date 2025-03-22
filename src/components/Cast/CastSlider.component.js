import React from "react";
import CastPic from "../Cast/CastPic.component";

import settings from "../../config/PosterCarousal.config";

import Slider from "react-slick";

const CastSlider = (props) => {
  return (
    <>
    <div className="flex flex-col items-start px-3 py-4">
    <h3 className={
`text-2xl font-bold ${
  props.isdark ? "text-white" : "text-gray-800"
}`
    }>{props.original_name}</h3>
    <p className={
`text-sm ${
  props.isdark ? "text-white" : "text-gray-800"
}`
    }>{props.profile_path}</p>
    </div>
    <Slider {...settings}>
    {props.images.map((image)=> (
      <CastPic {...image} isdark={props.isdark} />
    ))}
    </Slider>
    </>
  )
}

export default CastSlider;