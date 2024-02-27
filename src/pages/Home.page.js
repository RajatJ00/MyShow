import axios from "axios";
import React, { useState, useEffect } from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {

  // POPULAR MOVIES
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  // console.log({ popularMovies });

  // TOP-RATED MOVIES
  const [top_ratedMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const requestTopMovies = async () => {
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);
    };
    requestTopMovies();
  }, []);

  // console.log({ top_ratedMovies });

  // NOW_PLAYING MOVIES
  const [now_playingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  // console.log({ now_playingMovies });

  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-200">
        <div className="bg-navCol-700 py-6">
          <div className=" container mx-auto px-4">
            <PosterSlider 
            images={now_playingMovies} 
            title="NOW PLAYING MOVIES" 
            subtitle="Brand New Releases Every Friday" isdark />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={top_ratedMovies}
          title="Top Rated Movies"
          isdark={false}
        />
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={popularMovies}
          title="Popular Movies"
          isdark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
