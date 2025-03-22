import axios from "axios";
import React, { useState, useEffect } from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TVPosterSlider from "../components/PosterSlider/TVPosterSlider.component.js";
import TVHeroCarousal from "../components/HeroCarousal/TVHeroCarousal.component";

const HomePage = () => {
  // MOVIES
  const [upcomingMovies, setUpcomingMovies] = useState([]);// UPCOMING MOVIES
  const [popularMovies, setPopularMovies] = useState([]);// POPULAR MOVIES
  const [top_ratedMovies, setTopMovies] = useState([]);// TOP-RATED MOVIES
  const [now_playingMovies, setNowPlayingMovies] = useState([]);// NOW_PLAYING MOVIES

  // TV
  const [DiscoverTV, setDiscoverTV] = useState([]);// DISCOVER TVSHOWS
  const [TVTopRated, setTVTopRated] = useState([]);// TV TOP RATED
  const [TVPopular, setTVPopular] = useState([]);// TV POPULAR
  useEffect(() => {
    const request = async () => {
      // UPCOMING MOVIES
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);

      // POPULAR MOVIES
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);

      // TOP-RATED MOVIES
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);

      // NOW_PLAYING MOVIES
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);

      // DISCOVER TVSHOWS
      const getDiscoverTV = await axios.get("/discover/tv");
      setDiscoverTV(getDiscoverTV.data.results);

      // TV TOP RATED
      const getTVTopRated = await axios.get("/tv/top_rated");
      setTVTopRated(getTVTopRated.data.results);

      // TV POPULAR
      const getTVPopular = await axios.get("/tv/airing_today");
      setTVPopular(getTVPopular.data.results);
    };
    request();
  }, []);

  return (
    <>

      {/* ------------- MOVIES ------------- */}
      <p className="w-full text-black text-center text-3xl py-4 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl">Movies</p>

      <PosterSlider
        images={upcomingMovies}
        title="Upcoming Movies" />

      <PosterSlider
        images={top_ratedMovies}
        title="Top Rated Movies" />
      <PosterSlider
        images={now_playingMovies}
        title="NOW PLAYING MOVIES"
        subtitle="Brand New Releases Every Friday" isdark />

      <PosterSlider
        images={popularMovies}
        title="Popular Movies" />


      {/* ------------- TV ------------- */}
      <p className="w-full text-black text-center text-3xl py-4 mb-3 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl">TV Shows</p>
      <TVHeroCarousal />
      <TVPosterSlider
        images={DiscoverTV}
        title="Popular TV Shows"/>
      <TVPosterSlider
        images={TVTopRated}
        title="Top Rated TV Shows"/>
      <TVPosterSlider
        images={TVPopular}
        title="Discover TV Shows"/>
    </>
  );
};

export default HomePage;
