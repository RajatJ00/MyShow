import axios from "axios";
import React, { useState, useEffect } from "react";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const Plays = () => {
   // UPCOMING MOVIES
   const [upcomingMovies, setUpcomingMovies] = useState([]);

   // POPULAR MOVIES
   const [popularMovies, setPopularMovies] = useState([]);

   useEffect(() => {
      const request = async () => {
         const getUpcomingMovies = await axios.get("/movie/upcoming");
         setUpcomingMovies(getUpcomingMovies.data.results);
         const getPopularMovies = await axios.get("/movie/popular");
         setPopularMovies(getPopularMovies.data.results);
      };
      request();
   }, []);

   return (
      <>
         <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse mobile:flex-col-reverse mobile:flex p-4">
            <div className="lg:w-[80%] flex flex-col gap-2">
               <h2 className="text-2xl font-bold mb-4 mt-4 px-4">Plays in Pune</h2>
               <PosterSlider
                  images={popularMovies}
                  isdark
               />
               <PosterSlider
                  images={upcomingMovies}
                  title="Upcoming Movies"
                  isdark={false}
               />
            </div>

            <div className="lg:w-[20%] bg-gray-100 rounded-xl h-full px-2 py-4 mr-3 mobile:text-sm drop-shadow-lg shadow-black">
               <h2 className="text-2xl font-bold p-3">Filters</h2>
               <div className="lg:flex lg:flex-col md:flex md:flex-row gap-5 m-2">
                  <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                  <PlaysFilter title="Languages" tags={["English", "Hindi", "Marathi"]} />
                  <PlaysFilter title="Categories" tags={["TV Shows", "Movies", "Events"]} />
               </div>
            </div>
         </div>
      </>
   )
};
export default Plays;