import  axios  from '../axios';
import { useState, useEffect } from 'react';
function Row( {title,fetchUrl}) {
    const [movies,setmovies]=useState([]);

    useEffect(() => {

        async function fetchdata(){
        const request = await axios.get(fetchUrl);
         setmovies(request.data.results);
         console.log(request);
         return request;
        }
        fetchdata();
    } , [fetchUrl]);
    console.table(movies)
  return (
    <div className="row">
        <h2> {title}</h2>
        <div className="row_posters">
            {movies.map(movie =>(
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name}/>
            ))}

        </div>
      
    </div>
  )
}

export default Row
