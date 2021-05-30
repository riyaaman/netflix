import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl} from '../../constants/constants'

// import { imageUrl} from '../../constants/constants'
import YouTube  from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    // const [count, setCount] = useState()
   
    useEffect(() => {
        // axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
        //     console.log(response.data)
        axios.get(props.url).then((response)=>{
           // console.log(response.data)
            // setCount(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
            // console.log("kkk",count)
            // setMovies(count)
           setMovies(response.data.results)

        }).catch((err)=>{
          //  alert(err)
        })
       
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id) =>{
          console.log(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
              console.log(response.data)
              if(response.data.results.length != 0){
                  setUrlId(response.data.results[0])

              }
              else{
                  console.log("not available")
              }

          })

      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
               {
                    movies.map((obj,key)=>
                        <img onClick={()=>handleMovie(obj.id)} className= {props.isSmall ? 'smallPoster':'poster'} alt='poster'  src={`${imageUrl+obj.backdrop_path}`} />
                    )
                } 


                
            </div>
        { urlId &&   <YouTube videoId={urlId.key} opts={opts}  />  }
        </div>
    )
}

export default RowPost

