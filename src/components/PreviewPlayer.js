import React from "react";
import './PreviewPlayer.css';
function PreviewPlayer(){


    return(
        <>
        <div id="movie-bg" className="" ></div>
        <div id="display-movie-title">
            <div id="movie-logo" ></div>
            <div id="movie-caption">Tokyo is haunted by ghouls who resemble humans but feast on their flesh. As a ghoul-human hybrid, Ken Kaneki finds himself caught between two worlds. Watch all you want..</div>
            <div id="buttons">
                <button id="playb"> Play</button>
                <button id="moreb"> More Info</button>
            </div>
        </div>
        </>
    )
}
export default PreviewPlayer;