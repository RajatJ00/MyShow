import React from "react";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";

//props -> src, title,subtitle, isdark(bool)
const TVPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className="h-80" >
          <Link to={`/tv/${props.id}`} style={{textDecoration:"none"}}>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_name} className="w-full h-full rounded-xl hover:shadow-2xl hover:shadow-black" /></Link>
        </div>
        <h3
          className={`text-lg font-bold ${props.isdark ? "text-white" : "text-gray-700"
            }`}
        >{props.name}</h3>
        <p
          className={`text-base font-bold flex items-center ${props.isdark ? "text-white" : "text-gray-700"
            }`}
        ><BiStar className="mr-1"/>{props.vote_average}</p>
      </div>
    </>
  )
};
export default TVPoster;