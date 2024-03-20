import React, { useContext, useEffect } from "react";
import './Home.css';
import Title from "./scraps/Title.js";
import { ViewContext } from "../contexts/ViewProvider.js";
import PreviewPlayer from "./PreviewPlayer.js";
function Home(){
    const { mobileView , menuVisible , setMenuVisible} = useContext(ViewContext);
    useEffect(()=>{
        const bg  = document.getElementById("bg");
        if(menuVisible){
            bg.addEventListener("click",()=>{
            setMenuVisible(false);
        })}
    },[menuVisible,setMenuVisible])
    return(
        <>
        
        <div className={`!bg-black relative !z-[-10] ${menuVisible?"!overflow-hidden fixed":""}`}>
            { mobileView && <PreviewPlayer/>}
            <div id="bg" className={`z-[100] ${menuVisible?"opacity-50 ":"opacity-100"}`}>
                <div id="temp" className=" pt-[100px]"></div>
                <Title H="Watching Now" c ="now_playing" id={1}/>
                <Title H="Popular" c ="popular" id={2}/>
                <Title H="Top Rated" c ="top_rated" id={3}/>
                <Title H="Upcoming" c ="upcoming" id={4}/>
            </div>
        </div>
        </>
    )
}
export default Home;