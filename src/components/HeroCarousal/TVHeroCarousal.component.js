import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
import { BiStar } from "react-icons/bi";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const ViewMore = () => {
// let options={
//   handler: () => {
    
//   }
// }
// };

const TVHeroCarousal = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/tv/top_rated");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);


  const settingsLg = {
    autoplay: true,
    arrows: false,
    centerMode: true,
    interval: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true
  }

  const settings = {
    autoplay: true,
    interval: 300,
    arrows: true,
    slidesToScroll: 1,
    infinite: true,
    fade: true
  };

  return (
    <>
      <div className="lg:hidden bg-navCol-800">
        <HeroSlider {...settings}>
          {
            images.map((image) => (
              <div className="">
                <div className="w-full h-64 md:h-80 py-3">
                  <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                    alt="Movies Banner" className="w-full h-full rounded-md opacity-80" />
                </div>

                <div className="absolute bottom-0 h-full ml-6 items-center flex ">

                  <div className="flex">
                    <img src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                      alt="Poster Movies" className=" rounded-full h-40 shadow-lg w-min" />
                  </div>

                  <div className="pl-4 h-14 text-white font-bold">
                    <h1>{image.name}</h1>
                    <div className="flex items-center">
                      <BiStar className="m-1" />
                      {image.vote_average}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </HeroSlider>
      </div>

      <div className="hidden lg:block bg-navCol-800 ">
        <HeroSlider {...settingsLg}>
          {
            images.map((image) => (
              <div className="p-3">
              <div className="shadow-2xl shadow-black relative rounded-xl">
                <div className="w-fit h-96">
                  <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                    alt="Movies Banner" className="w-full h-full rounded-md opacity-70" />
                </div>

                <div className="absolute bottom-0 ml-10 mb-8 items-center flex ">

                  <div className="flex">
                    <img src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                      alt={image.original_title} className="w-36 rounded-xl drop-shadow-lg" />
                  </div>

                  <div className="pl-4 h-14 text-white font-bold">
                    <h1 className="text-xl h-16 text-ellipsis overflow-hidden">{image.name}</h1>
                    <div className="flex items-center">
                      <BiStar className="m-1" />
                      {image.vote_average}
                    </div>
                  <p className="text-sm w-96 h-16 text-ellipsis overflow-hidden ">{image.overview}</p>
                  </div>
                </div>
              </div></div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  );
};

export default TVHeroCarousal;