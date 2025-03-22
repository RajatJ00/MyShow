import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Youtube from 'react-youtube'

const api = process.env.REACT_APP_API_KEY;

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
   useEffect(() => { fetchTV(); return getData() })

   const getData = () => {
      fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api}&language=en-US&append_to_response=videos`)
         .then(res => res.json())
         .then(data => setTV(data))
   }

   return (
      <div>{playing ?
         <>
            <Youtube
               videoId={trailer ? trailer.key : 'index'}
               className="w-2/3 lg:h-[70vh] md:h-[50vh] sm:h-96 bg-blue-900 place-self-center"
               opts={
                  {
                     width: '100%',
                     height: '100%',
                     playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 1,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                     },
                  }
               }
            />
            <button onClick={() => setPlaying(false)} className="w-1/2 py-2 bg-gray-200 text-black hover:bg-navCol-500 hover:text-white font-bold text-base px-6 rounded mobile:p-1 mobile:text-sm my-3 shadow-md shadow-black flex place-content-center justify-self-center">Close</button>
         </> :
         <div className="flex justify-center">
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