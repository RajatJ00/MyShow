import axios from "axios";
import React, { useState, useEffect } from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {

  // POPULAR MOVIES
  const [popularMovies, setPopularMovies] = useState([]);

  // NOW_PLAYING MOVIES
  const [now_playingMovies, setNowPlayingMovies] = useState([]);

  // TOP-RATED MOVIES
  const [top_ratedMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);
    };
    requestPopularMovies();
  }, []);


  // useEffect(() => {
  //   const fetchPopularMovies = async () => {
  //     try {
  //       const response = await axios.get("/movie/popular");
  //       setPopularMovies(response.data.results);
  //     } catch (error) {
  //       console.error("Error fetching popular movies:", error);
  //     }
  //   };

  //   fetchPopularMovies();
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-5 bg-navCol-700 py-6">
        <PosterSlider
          images={now_playingMovies}
          title="NOW PLAYING MOVIES"
          subtitle="Brand New Releases Every Friday"
          isdark />
      </div>
      <PosterSlider
        images={top_ratedMovies}
        title="Top Rated Movies" />
      <PosterSlider
        images={popularMovies}
        title="Popular Movies" />
    </>
  );
};

export default HomePage;
