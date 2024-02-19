// import axios from "axios";
import React from "react";
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom"
// import SearchSlider from "../components/PosterSlider/SearchSlider.component";

const Searching = () => {
   // Searching

   // const [SearchDetail, Search] = useState()
   // const { id } = useParams()

   // useEffect(() => {
   //    Search(SearchDetail)
   //    getData()
   //    window.scrollTo(0, 0)
   // }, []);

   // const getData = () => {
   //    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07507c344c521bff153d27b8b92e0096&language=en-US`)
   //       .then(res => res.json())
   //       .then(data => Search(data))
   // }

   // const navigate = useNavigate();

   // console.log({ SearchDetail });

   return (
      <>
         <div className="container mt-7 mx-auto bg-cyan-600">
            <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse mobile:flex-col-reverse mobile:flex">
               <div className="lg:w-10/12">
                  <h2 className="text-2xl font-bold mb-4 mt-4">Searching</h2>
                  <div className="flex flex-wrap">
                     <div className="container mx-auto px-4">
                        {/* <SearchSlider
                           images={Search}
                           title="Results from Search"
                           isdark={false}
                           onClick={() => navigate(`/movie/${id}`)}
                        /> */}
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
};
export default Searching;