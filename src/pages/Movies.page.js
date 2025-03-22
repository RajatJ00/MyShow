import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BiStar } from "react-icons/bi";
import YTMovie from "../components/Youtube/YT.component";
// import CastSlider from "../components/Cast/CastSlider.component";

const Movie = () => {
   const [currentMovieDetail, setMovie] = useState()
   const { id } = useParams()

   useEffect(() => { getData() });

   const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07507c344c521bff153d27b8b92e0096&language=en-US&append_to_response=videos`)
         .then(res => res.json())
         .then(data => setMovie(data))
   }

   const navigate = useNavigate();

   // console.log({ currentMovieDetail });

   // CAST

   // const [Cast, setCasts] = useState([]);

   // useEffect(() => {
   //    const getCredits = async () => {
   //       const res = await axios.get("t/p/original");
   //       setCasts(res.cast.slice(0, 5));
   //    }
   //    getCredits();
   // }, []);

   // console.log({ Cast });

   return (
      <div>
         <div className="relative flex w-full flex-col items-center bg-navCol-700 shadow-2xl shadow-black mt-[-10%]">
            <div className="lg:h-96 mobile:w-ful mobile:h-10 md:h-52">
               <img className="w-full mobile:my-8 md:my-0 items-center flex  bg-gradient-to-t from-black" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="Movie Backdrop" />
            </div>
            <div className="items-center w-full flex relative bg-gradient-to-t from-black pb-2">

               <div className=" md:w-40 lg:w-80 lg:ml-5 sm:w-10">
                  <div className="mobile:w-40 lg:w-full flex lg:p-2 mobile:p-2 ">
                     <img className="rounded-lg shadow-xl shadow-black" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="Movie poster" />
                  </div>
               </div>

               <div className="lg:w-full md:w-full mobile:w-44 flex flex-col lg:h-96 text-white justify-between ml-4">
                  <div>
                     <div className="font-semibold mobile:text-xl md:text-2xl lg:text-4xl mt-4">{currentMovieDetail ? currentMovieDetail.title : ""}</div>
                     <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                     <div className="flex items-center mobile:text-xs lg:text-lg"> <BiStar className="mr-1" />
                        {currentMovieDetail ? currentMovieDetail.vote_average : ""}
                     </div>
                     <span className=" mobile:text-xs lg:text-lg">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                     <div className=" mobile:text-xs lg:text-lg">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                     <div className=" mobile:text-xs lg:text-lg">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                     <div className=" mobile:flex mobile:flex-wrap p-2">
                        {
                           currentMovieDetail && currentMovieDetail.genres
                              ?
                              currentMovieDetail.genres.map(genre => (
                                 <><span className="lg:px-2 border-2 rounded-2xl mr-4 bg-gray-600 lg:text-sm mobile:w-fit mobile:mb-1 mobile:text-xs  mobile:p-1  mobile:h-fit shadow-2xl shadow-black" id={genre.id}>{genre.name}</span></>
                              ))
                              :
                              ""
                        }
                     </div>

                     <button onClick={() => navigate(`/movie/${id}/selection`)} className=" lg:py-2 bg-red-500 hover:bg-red-700 text-white font-bold lg:text-base lg:px-6 lg:rounded mobile:rounded mobile:px-1 mobile:py-1 mobile:text-sm mobile:my-3  shadow-xl shadow-black">
                        Book ticket
                     </button>
                  </div>

               </div>
            </div>


         </div>
         <div className="mr-8 mobile:mb-10 lg:mb-1 mobile:mr-0 text-white bg-navCol-700 lg:pb-20 p-4 shadow-2xl shadow-black">
            <YTMovie /> {/* setPlaying(false) */}
            <div className="lg:text-3xl font-semibold relative items-center mobile:mb-1 mobile:text-sm mt-10">Overview</div>
            <div className="lg:w-full lg:h-fit lg:pr-28 lg:text-lg text-ellipsis overflow-hidden mobile:text-xs  mobile:h-fit">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
         </div>
         {/* <div className="container mx-auto px-4">
        <CastSlider
          images={Cast}
          title="CAST"
          isdark={false}
        />
      </div> */}
         <div className="font-bold lg:text-3xl text-black p-2 mobile:text-xl mt-10 ml-3">Production companies</div>
         <div className="mx-3 bg-white p-2">
            <div className=" mb-16 flex flex-wrap">
               {
                  currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
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
         </div>
      </div>
   )
}

export default Movie;