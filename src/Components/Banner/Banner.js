import React , {useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'

import axios from '../../axios'

function Banner() {
//    const [id, setId] = useState('')
    const [movie, setMovie] = useState()
    
    useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      //  console.log(response.data.results[0])
        //setMovie(response.data.results[0])
        setMovie(response.data.results[0])
        
    })
    }, [])
    return (
        <div className="banner" style={{backgroundImage:`url(${movie?imageUrl + movie.backdrop_path:""})`}}>
           <div className="content">
           <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
               {/* <h1 className="title">{movie? movie.title:''} </h1> */}
               <div className="banner_buttons">
                   <button className="button">Play</button>
                   <button className="button">MyList</button>

               </div>
               <div className="description">
               {movie? movie.overview:''} 
               </div>

           </div>
           <div className="fade_bottom">

           </div>

        </div>
    )
}

export default Banner
