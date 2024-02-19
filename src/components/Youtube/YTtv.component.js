import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Youtube from 'react-youtube'

const YTtv = () => {
    const [currentTVDetail, setTV] = useState([])
    const { id } = useParams()
    const [trailer, setTrailer] = useState(false)
    const [playing, setPlaying] = useState(false)
 
    const fetchTV = () => {
 
       if (currentTVDetail.videos && currentTVDetail.videos.results) {
          const trailer = currentTVDetail.videos.results.find(vid => vid.name === "Trailer");
          setTrailer(trailer ? trailer : currentTVDetail.videos.results[0]);
       }
    }
 
    useEffect(() => {
       setPlaying(false)
       getData()
       window.scrollTo(0, 0)
    }, []);
    useEffect(()=>{fetchTV()})
 
    const getData = () => {
       fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=07507c344c521bff153d27b8b92e0096&language=en-US&append_to_response=videos`)
          .then(res => res.json())
          .then(data => setTV(data))
    }
 
    return(
        <div>{playing ?
               <>
                  <div className="bg-red-600"><Youtube
                     videoId={trailer ? trailer.key : 'index'}
                     className="w-screen h-screen bg-gray-100"
                     opts={
                        {
                           width: '100%',
                           height: '100%',
                           playerVars: {
                              autoplay: 1,
                              controls: 1,
                              cc_load_policy: 0,
                              fs: 0,
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
export default YTtv;