import React from "react";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";

//props -> src, title,subtitle, isdark(bool)
const Poster = (props) => {
  return (
    <div className={`flex flex-col p-3 ${props.isdark ? "text-white" : "text-gray-700"}`}>
      <img className="w-52 h-80 rounded-xl shadow-[0_0_10px_#1f2937] hover:shadow-none transition duration-500" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} />
      <Link to={`/movie/${props.id}`} style={{ textDecoration: "none" }}>
        <h3 className="text-base line-clamp-1">{props.title}</h3>
      </Link>
      <p className="font-bold text-base flex items-center gap-1" >{props.vote_average}<BiStar /></p>
    </div>
  )
};
export default Poster;