import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Youtube from 'react-youtube'

const api = process.env.REACT_APP_API_KEY;

const YTMovie = () => {
    const [currentMovieDetail, setMovie] = useState([])
    const { id } = useParams()
    const [trailer, setTrailer] = useState(false)
    const [playing, setPlaying] = useState(false)
 
    const fetchMovie = () => {
 
       if (currentMovieDetail.videos && currentMovieDetail.videos.results) {
          const trailer = currentMovieDetail.videos.results.find(vid => vid.name === "Official Trailer");
          setTrailer(trailer ? trailer : currentMovieDetail.videos.results[0]);
       }
    }
    useEffect(()=>{fetchMovie(); return getData()})
 
    const getData = () => {
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US&append_to_response=videos`)
          .then(res => res.json())
          .then(data => setMovie(data))
    }
 
    return(
        <div>{playing ?
               <>
                  <div className="flex justify-center"><Youtube
                     videoId={trailer ? trailer.key : 'index'}
                     className="w-[90%] bg-gray-100 shadow-[0_0_30px#000]"
                     opts={
                        {
                           width: '100%',
                           height: '640',
                           playerVars: {
                              autoplay: 1,
                              disablekb: 0,
                              cc_load_policy: 0,
                              iv_load_policy: 0,
                              modestbranding: 0,
                              rel: 0,
                              showinfo: 0,
                           },
                        }
                     }
                  /></div>
                  <button onClick={() => setPlaying(false)} className="lg:py-2 bg-gray-200 text-black hover:bg-navCol-500 hover:text-white font-bold lg:text-base lg:px-6 lg:rounded mobile:rounded mobile:px-1 mobile:py-1 mobile:text-sm mobile:my-3 shadow-md shadow-black">Close</button>
               </> :
               <div className="flex justify-center ">
                  {trailer ?
                     <button className="lg:w-1/2 lg:py-2 bg-gray-200 text-black hover:bg-navCol-500 hover:text-white font-bold lg:text-base lg:px-6 lg:rounded mobile:rounded mobile:px-1 mobile:py-1 mobile:text-sm mobile:my-3 shadow-md shadow-black" onClick={() => setPlaying(true)}
                        type="button">Play
                        Trailer</button>
                     : 'Sorry, no trailer available'}
               </div>
            }
        </div>
    )
}
export default YTMovie;