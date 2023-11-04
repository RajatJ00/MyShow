import axios from "axios";
import React, { useState, useEffect } from "react";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const Plays = () => {
// UPCOMING MOVIES
   const [upcomingMovies, setUpcomingMovies] = useState([]);

   useEffect(() => {
   const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
   };
   requestUpcomingMovies();
}, []);

console.log({upcomingMovies});

// POPULAR MOVIES
const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

console.log({popularMovies});

   return (
      <>
         <div className="container mt-7 mx-auto">
            <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse mobile:flex-col-reverse mobile:flex">
               <div className="lg:w-10/12">
                  <h2 className="text-2xl font-bold mb-4 mt-4">Plays in Pune</h2>
                  <div className="flex flex-wrap">
                     <div className="container mx-auto px-4">
                        <PosterSlider
                           images={popularMovies}
                           isdark={false}
                        />
                     </div>
                     <div className="container mx-auto px-4">
                        <PosterSlider
                           images={upcomingMovies}
                           title="Upcoming Movies"
                           isdark={false}
                        />
                     </div>
                  </div>
               </div>

               <div className="lg:w-2/12 bg-gray-200 rounded-xl h-full p-2 mr-3 mobile:text-sm drop-shadow-lg shadow-black">
                  <h2 className="text-2xl font-bold p-3">Filters</h2>
                  <div className="lg:flex lg:flex-col md:flex md:flex-row gap-7">
                     <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                     <PlaysFilter title="Languages" tags={["Marathi", "English","Hindi"]} />
                     <PlaysFilter title="Categories" tags={["TV Shows", "Movies", "Events"]} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};
export default Plays;