import React from "react";
import { useParams } from "react-router";
import './Search.css';
function Search(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'not available to you'
        }
      };
    const {search} = useParams();
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(function(response){
        const data = response;
        const movies = data.results;
        console.log(data);
        var cardListContainer = document.getElementById('searched');
        if(cardListContainer.hasChildNodes()){
            cardListContainer.innerHTML='';
            console.log("removed child inside fetch");
        }
        let slider_div = document.createElement('div');
        slider_div.className = `slider_div2`;
        console.log(movies);
        movies.forEach((element, i) => {
          if(element.poster_path==null) return;
        
          let moviediv = document.createElement('div');
          moviediv.className = `moviediv2`;
          moviediv.style.background = `url(https://image.tmdb.org/t/p/w500${element.poster_path})`;
          moviediv.style.backgroundSize='cover';
          slider_div.appendChild(moviediv);
        });
        cardListContainer.appendChild(slider_div);
    } )
    .catch(err => console.error(err));


    return(
        <div className="bg-[#111111] min-h-[100vh] w-[100vw]  text-white flex justify-center">

            <div id="searched" className=" mt-[100px] w-[100vw] flex flex-wrap "></div>
        </div>
    )
}
export default Search;
