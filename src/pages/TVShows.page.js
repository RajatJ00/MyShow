import axios from "axios";
import React, { useState, useEffect } from "react";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
import TVPosterSlider from "../components/PosterSlider/TVPosterSlider.component.js";

const Plays = () => {
   // DISCOVER TVSHOWS
   const [DiscoverTV, setDiscoverTV] = useState([]);

   useEffect(() => {
      const requestDiscoverTV = async () => {
         const getDiscoverTV = await axios.get("/discover/tv");
         setDiscoverTV(getDiscoverTV.data.results);
      };
      requestDiscoverTV();
   }, []);

   // console.log({ DiscoverTV });

   // TV TOP RATED
   const [TVTopRated, setTVTopRated] = useState([]);

   useEffect(() => {
      const requestTVTopRated = async () => {
         const getTVTopRated = await axios.get("/tv/top_rated");
         setTVTopRated(getTVTopRated.data.results);
      };
      requestTVTopRated();
   }, []);

   // console.log({ TVTopRated });

   // TV POPULAR
   const [TVPopular, setTVPopular] = useState([]);

   useEffect(() => {
      const requestTVPopular = async () => {
         const getTVPopular = await axios.get("/tv/airing_today");
         setTVPopular(getTVPopular.data.results);
      };
      requestTVPopular();
   }, []);

   // console.log({ TVPopular });

   return (
      <>
         <div className="container mt-7 mx-auto">
            <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse mobile:flex-col-reverse mobile:flex">
               <div className="lg:w-10/12">
                  <div className="flex flex-wrap">
                     <p className="w-full text-black text-center text-3xl py-4 bg-gray-200 font-bold rounded-xl mt-2 drop-shadow-lg shadow-black ">TV Shows</p>
                     <div className="container mx-auto px-4">
                        <TVPosterSlider
                           images={DiscoverTV}
                           title="Popular TV Shows"
                           isdark={false}
                        />
                     </div>
                     <div className="container mx-auto px-4">
                        <TVPosterSlider
                           images={TVTopRated}
                           title="Top Rated TV Shows"
                           isdark={false}
                        />
                     </div>
                     <div className="container mx-auto px-4">
                        <TVPosterSlider
                           images={TVPopular}
                           title="Discover TV Shows"
                           isdark={false}
                        />
                     </div>
                  </div>
               </div>

               <div className="lg:w-2/12 bg-gray-200 rounded-xl h-full p-2 mr-3 mobile:text-sm drop-shadow-lg shadow-black">
                  <h2 className="text-2xl font-bold p-3">Filters</h2>
                  <div className="lg:flex lg:flex-col md:flex md:flex-row gap-7">
                     <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                     <PlaysFilter title="Languages" tags={["Marathi", "English", "Hindi"]} />
                     <PlaysFilter title="Categories" tags={["TV Shows", "Movies", "Events"]} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};
export default Plays;