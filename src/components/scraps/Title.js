import React, { useContext } from "react";
import './Title.css';
import { ViewContext } from "../../contexts/ViewProvider";
function Title({H , c ,id}){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDUyZGI5NzEyZDY2ZGM4ZjE3MTYxM2UwMDliNDA4NyIsInN1YiI6IjY1YzFjMDBlMDkyOWY2MDE0OGUzZTAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMZ3lfEwm6NIM-NmbRlvf0W-EwS0z1O5wDxV_POcQcE'
        }
      };
      
    fetch(`https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(function(response){
        const data = response;
        console.log(data);
        const movies = data.results;

        let cardListContainer = document.getElementById(`card-list${id}`);

        movies.forEach((element, i) => {

            var outerdiv = document.createElement('div');
            outerdiv.className = `outerdiv-slider`;

            var moviediv = document.createElement('div');
            moviediv.className = `moviediv`;
            moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
            moviediv.style.backgroundSize = "cover";

            outerdiv.appendChild(moviediv);

            cardListContainer.appendChild(outerdiv);
        });
    })
    const { menuVisible } = useContext(ViewContext);
    return(
        <>
            <h1>
                {H}
            </h1>
            <div id={`card-list${id}`} className={`card-list scrollbar-hide ${menuVisible?" !overflow-x-hidden":"overflow-auto"}`}>

            </div>
        </>
    )
}
export default Title