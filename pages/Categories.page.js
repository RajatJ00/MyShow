import axios from "axios";
import React, { useState, useEffect } from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TVPosterSlider from "../components/PosterSlider/TVPosterSlider.component.js";
import TVHeroCarousal from "../components/HeroCarousal/TVHeroCarousal.component";

const HomePage = () => {
  // MOVIES
  // UPCOMING MOVIES
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  console.log({ upcomingMovies });

  // DISCOVER MOVIES
  const [DiscoverMovies, setDiscoverMovies] = useState([]);

  useEffect(() => {
    const requestDiscoverMovies = async () => {
      const getDiscoverMovies = await axios.get("/discover/movie");
      setDiscoverMovies(getDiscoverMovies.data.results);
    };
    requestDiscoverMovies();
  }, []);

  console.log({ DiscoverMovies });

  // POPULAR MOVIES
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  console.log({ popularMovies });

  // TOP-RATED MOVIES
  const [top_ratedMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const requestTopMovies = async () => {
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);
    };
    requestTopMovies();
  }, []);

  console.log({ top_ratedMovies });

  // NOW_PLAYING MOVIES
  const [now_playingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  console.log({ now_playingMovies });

  // TVSHOWS

  // DISCOVER TVSHOWS
  const [DiscoverTV, setDiscoverTV] = useState([]);

  useEffect(() => {
    const requestDiscoverTV = async () => {
      const getDiscoverTV = await axios.get("/discover/tv");
      setDiscoverTV(getDiscoverTV.data.results);
    };
    requestDiscoverTV();
  }, []);

  console.log({ DiscoverTV });

  // TV TOP RATED
  const [TVTopRated, setTVTopRated] = useState([]);

  useEffect(() => {
    const requestTVTopRated = async () => {
      const getTVTopRated = await axios.get("/tv/top_rated");
      setTVTopRated(getTVTopRated.data.results);
    };
    requestTVTopRated();
  }, []);

  console.log({ TVTopRated });

  // TV POPULAR
  const [TVPopular, setTVPopular] = useState([]);

  useEffect(() => {
    const requestTVPopular = async () => {
      const getTVPopular = await axios.get("/tv/airing_today");
      setTVPopular(getTVPopular.data.results);
    };
    requestTVPopular();
  }, []);

  console.log({ TVPopular });


  return (
    <>
      <p className="w-full text-black text-center text-3xl py-4 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl">Movies</p>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={upcomingMovies}
          title="Upcoming Movies"
          isdark={false}
        />
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={top_ratedMovies}
          title="Top Rated Movies"
          isdark={false}
        />
      </div>
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
      <div className="container mx-auto px-4 pb-10">
        <PosterSlider
          images={popularMovies}
          title="Popular Movies"
          isdark={false}
        />
      </div>
      <p className="w-full text-black text-center text-3xl py-4 mb-3 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl">TV Shows</p>
      <TVHeroCarousal/>
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
    </>
  );
};

export default HomePage;
