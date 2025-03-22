import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2';
import { BiStar } from "react-icons/bi";
import axios from "axios";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// import CastSlider from "../components/Cast/CastSlider.component";

const api = process.env.REACT_APP_API_KEY;

const BookTicket = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => { getData() });

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US&append_to_response=videos`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

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

    const launchRazorPay = () => {
        let options = {
            key: "rzp_test_RPRYvWAcKowqvj",
            amount: 100 * 100,
            currency: "INR",
            name: "MyShow",
            description: "Movie Purchase",
            image: "https://i.pinimg.com/564x/be/03/da/be03dac8c62d1ed3680b0d86633cfd1c.jpg",
            handler: () => {
                const posterURL = currentMovieDetail ? `https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}` : '';
                const title = currentMovieDetail ? currentMovieDetail.title : "";

                Swal.fire({
                    title: 'Ticket Confirmed !!!',
                    text: "",
                    html: `
          <img src="${posterURL}" alt="${title}" className="h-fit w-40 mx-auto">
          <h3 className="font-semibold">${title}</h3>`,
                    imageUrl: 'https://i.pinimg.com/564x/be/03/da/be03dac8c62d1ed3680b0d86633cfd1c.jpg',
                    imageWidth: 120,
                    imageHeight: 120,
                    imageAlt: 'movie poster',
                })
            },
            theme: { color: "#c4242d" }
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (<div>
        <div className="pb-7 bg-navCol-700">
            <div className="relative flex w-full flex-col items-center bg-navCol-700 shadow-2xl shadow-black">
                <div className="lg:w-3/4 lg:h-80 lg:mb-0 mobile:w-full mobile:mb-10 mobile:h-10 md:h-52 md:mb-0">
                    <img className="w-full mobile:my-8 md:my-0 items-center flex  bg-gradient-to-t from-black" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="Movie Backdrop" />
                </div>
                <div className=" items-center w-full flex relative bg-gradient-to-t from-black">
                    <div className=" md:w-40 lg:w-80 ml-5">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center lg:pt-10 mobile:pt-10 md:pt-0">
                <div className="w-full text-center lg:pt-1 mobile:pt-10">
                    <div className="w-full justify-center">
                        <div className="w-full text-black text-center text-3xl py-1 mb-3 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl mt-2">
                            <h1>Select Theater</h1>
                        </div>
                        <div className=" text-black text-center text-xl font-bold drop-shadow-lg shadow-black ml-5">
                            <select className="rounded-xl p-1">
                                <option value="1">Theater One</option>
                                <option value="2">Theater Two</option>
                                <option value="3">Theater Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl mx-2 my-5">
                    <div className="w-full text-black text-center text-3xl py-1 mb-3 bg-gray-200 font-bold drop-shadow-lg shadow-black rounded-xl">
                        <h1>Select Seat</h1>
                    </div>
                    <div className="lg:w-full gap-2 px-20 justify-center flex flex-wrap text-lg">
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="1" /><p className="font-bold">1</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="2" /><p className="font-bold">2</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="3" /><p className="font-bold">3</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="4" /><p className="font-bold">4</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="5" /><p className="font-bold">5</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="6" /><p className="font-bold">6</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="7" /><p className="font-bold">7</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="8" /><p className="font-bold">8</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="9" /><p className="font-bold">9</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="10" /><p className="font-bold">10</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="11" /><p className="font-bold">11</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="12" /><p className="font-bold">12</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="13" /><p className="font-bold">13</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="14" /><p className="font-bold">14</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="15" /><p className="font-bold">15</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="16" /><p className="font-bold">16</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="17" /><p className="font-bold">17</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="18" /><p className="font-bold">18</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="19" /><p className="font-bold">19</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="20" /><p className="font-bold">20</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="21" /><p className="font-bold">21</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="22" /><p className="font-bold">22</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="23" /><p className="font-bold">23</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="24" /><p className="font-bold">24</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="25" /><p className="font-bold">25</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="26" /><p className="font-bold">26</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="27" /><p className="font-bold">27</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="28" /><p className="font-bold">28</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="29" /><p className="font-bold">29</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="30" /><p className="font-bold">30</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="31" /><p className="font-bold">31</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="32" /><p className="font-bold">32</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="33" /><p className="font-bold">33</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="34" /><p className="font-bold">34</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="35" /><p className="font-bold">35</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="36" /><p className="font-bold">36</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="37" /><p className="font-bold">37</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="38" /><p className="font-bold">38</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="39" /><p className="font-bold">39</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="40" /><p className="font-bold">40</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="41" /><p className="font-bold">41</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="42" /><p className="font-bold">42</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="43" /><p className="font-bold">43</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="44" /><p className="font-bold">44</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="45" /><p className="font-bold">45</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="46" /><p className="font-bold">46</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="47" /><p className="font-bold">47</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="48" /><p className="font-bold">48</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="49" /><p className="font-bold">49</p></div>
                        <div className="m-2 bg-gray-400 drop-shadow-lg shadow-black rounded w-fit px-2 "><input className="" type="checkbox" value="50" /><p className="font-bold">50</p></div>
                    </div>
                </div>
                <button onClick={launchRazorPay} className=" lg:py-2 bg-red-500 hover:bg-red-700 text-white font-bold lg:text-base lg:px-6 lg:rounded mobile:rounded mobile:px-1 mobile:py-1 mobile:text-sm mobile:my-3 shadow-xl shadow-black">
                    Confirm
                </button>
            </div>
        </div>

        <div className="bg-navCol-700 py-6">
            <div className=" container mx-auto px-4">
                <PosterSlider
                    images={now_playingMovies}
                    title="NOW PLAYING MOVIES"
                    subtitle="Brand New Releases Every Friday" isdark />
            </div>
        </div>
    </div>
    )
}
export default BookTicket;