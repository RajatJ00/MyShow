import React from "react";
//props -> src, title,subtitle, isdark(bool)
const CastPic = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className="h-80" >
          <img src={`https://image.tmdb.org/t/p/original${props.profile_path}`}
            alt={props.name} className="w-full h-full rounded-lg" />
        </div>
        <h3
          className={`text-lg font-bold ${props.isdark ? "text-white" : "text-gray-700"
            }`}
        >{props.original_name}</h3>
      </div>
    </>
  )
};
export default CastPic;