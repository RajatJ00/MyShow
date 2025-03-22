import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BiStar } from "react-icons/bi";
import YTtv from "../components/Youtube/YTtv.component";

const api = process.env.REACT_APP_API_KEY;

const Movie = () => {
   const [currentTVDetail, setTV] = useState()
   const { id } = useParams()

   useEffect(() => { getData() });

   const getData = () => {
      fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api}&language=en-US&append_to_response=videos`)
         .then(res => res.json())
         .then(data => setTV(data))
   }

   // console.log({ currentTVDetail });

   return (
      <div>
         <div className="relative flex w-full flex-col items-center bg-navCol-700 shadow-2xl shadow-black">
            <div className="lg:w-3/4 lg:h-80 mobile:w-full mobile:h-10 md:h-52">
               <img className="w-full mobile:my-8 md:my-0 items-center flex  bg-gradient-to-t from-black" src={`https://image.tmdb.org/t/p/original${currentTVDetail ? currentTVDetail.backdrop_path : ""}`} alt="TVShow Backdrop" />
            </div>
            <div className=" items-center w-full flex relative bg-gradient-to-t from-black pb-2">

               <div className=" md:w-40 lg:w-80 lg:ml-5 sm:w-10">
                  <div className="mobile:w-40 lg:w-full flex lg:p-2 mobile:p-2 ">
                     <img className="rounded-lg shadow-xl shadow-black" src={`https://image.tmdb.org/t/p/original${currentTVDetail ? currentTVDetail.poster_path : ""}`} alt="Movie poster" />
                  </div>
               </div>

               <div className="lg:w-full md:w-full mobile:w-44 flex flex-col lg:h-96 text-white justify-between ml-4">
                  <div>
                     <div className="font-semibold mobile:text-xl md:text-2xl lg:text-4xl mt-4">{currentTVDetail ? currentTVDetail.name : ""}</div>
                     <div className="movie__tagline">{currentTVDetail ? currentTVDetail.tagline : ""}</div>
                     <div className="flex items-center mobile:text-xs lg:text-lg"> <BiStar className="mr-1" />
                        {currentTVDetail ? currentTVDetail.vote_average : ""}
                     </div>
                     {/* <span className=" mobile:text-xs lg:text-lg">{currentTVDetail ? "(" + currentTVDetail.vote_count + ") votes" : ""}</span> */}
                     <div className=" mobile:text-xs lg:text-lg">{currentTVDetail ? currentTVDetail.popularity + " popularity" : ""}</div>
                     <div className=" mobile:text-xs lg:text-lg">{currentTVDetail ? "First Air Date: " + currentTVDetail.first_air_date : ""}</div>

                     <div className="lg:text-3xl font-semibold relative items-center mobile:mb-1 mobile:text-sm mt-2">Overview</div>
                     <div className="lg:w-full lg:h-fit lg:pr-28 lg:text-lg text-ellipsis overflow-hidden mobile:text-xs  mobile:h-20">{currentTVDetail ? currentTVDetail.overview : ""}</div>
                  </div>
               </div>
            </div>

         </div>
         <div className="lg:mb-1 md:mb-1 mobile:mb-10 text-white bg-navCol-700 lg:pb-20 shadow-2xl shadow-black">
            <YTtv />
         </div>
         <div className="font-bold lg:text-3xl text-black p-2 mobile:text-xl mt-10">Production companies</div>
         <div className=" bg-white p-2">
            <div className=" mb-16 flex flex-wrap">
               {
                  currentTVDetail && currentTVDetail.production_companies && currentTVDetail.production_companies.map(company => (
                     <>
                        {
                           company.logo_path
                           &&
                           <span className="w-44 flex flex-col items-center justify-around mb-8 p-5 shadow-2xl rounded-3xl mr-2">
                              <img className="aspect-square object-contain" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="Movie company logo" />
                              <span className="text-base font-semibold">{company.name}</span>
                           </span>
                        }
                     </>
                  ))
               }
            </div>
         </div></div>
   )
}

export default Movie;