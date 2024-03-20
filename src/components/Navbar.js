import React, { useContext, useEffect, useState } from "react";
import './Navbar.css' ;
import { ViewContext } from "../contexts/ViewProvider";
import { Link,  useNavigate } from "react-router-dom";

function Navbar(){

    const {mobileView ,setMobileView , menuVisible , setMenuVisible} = useContext(ViewContext);
    const navigate = useNavigate();
    const [search , setSearch] = useState('');
    const searching = (e) =>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
        if(search!=="")navigate(`/search/${search}`)
    },[search,navigate])

    useEffect(()=>{
        const handleResize = ()=>{
            setMobileView(window.innerWidth>768);
        }
        handleResize();
        window.addEventListener('resize' , handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    },[setMobileView])
    useEffect(()=>{
        if(!mobileView){
        document.addEventListener("scroll", function() {
            const nav = document.getElementById("nav");
            let scrolled = window.scrollY;
            if (scrolled > 50) {
                nav.style.backgroundColor="transparent";
                nav.style.backgroundColor = '#111111';
            } else {
                nav.style.backgroundColor="transparent";
                nav.style.backgroundImage = "linear-gradient(to bottom, black, transparent)";
            }
        
    })}},[mobileView])
    const [viewSrch, setviewSrch] = useState(false)

    const searchBar = ()=>{
    setviewSrch(!viewSrch);
    }
    return(
        
        <navbar >
            {mobileView &&
                <div id="nav" >
                    <div className="logo"></div>
                    <ul id="leftNav" className="navc">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>Browse by Language</li>
                    </ul>
                    <ul id="rightNav" className="navc flex items-center">
                        <button onClick={searchBar} className={`${viewSrch?'hidden':'block'} `} ><img src="../search.png" alt="" className={` h-6 w-6`}/></button>
                        <form onSubmit={(e)=>e.preventDefault()} className={`${viewSrch?'w-[18vw]':'w-[0]'} duration-[100ms]`}>
                            <div id="searchbox"  className={`${viewSrch?'':'!hidden '} duration-[100ms]`}>

                                    <div onClick={searchBar} id="submit"><img src="../search.png" alt="" className={` h-6 w-6 `}/></div>
                                    <input onChange={searching} type="text" placeholder="Title" id="ser_input"/>

                                    <Link to="/" onClick={searchBar} id="x"> X </Link>

                            </div>
                        </form>
                        <li>Children</li>
                        <li><img src="../bell-2.png" alt="" className=" h-6 w-6"/></li>
                        <li><img src="../login_img.png" alt=""/></li>
                    </ul>
                </div>
            }
            {
                !mobileView &&
                <div id="nav" className={` !bg-gradient-to-b  ${menuVisible?"!bg-black opacity-100":"!bg-[rgb(3,3,3)] !bg-opacity-40"}`}>
                    <button onClick={()=>{
                        if(menuVisible) setMenuVisible(false);
                        else setMenuVisible(true);
                    }}>
                    <img src="../menu.png" alt="" className=" px-5"/>
                    </button>
                    <Link to='/'className="logo !mx-[0px]"></Link>
                    <div id="searchdiv">
                        <input onChange={searching} id="search2" placeholder="Search"></input>
                    </div>

                </div>
            }
            {!mobileView &&
                <div className={`menu bg-black w-[70%] h-[100vh] bg-opacity-100 fixed ${menuVisible?"left-[0%]": "left-[-100%]"} text-gray-400 font-bold scrollbar-hide duration-[100ms] ease-in`}>
                <ul className="list px-[10px]">
                    <li className="flex">
                        <img src="../login_img.png" alt="" className="h-[80%] w-auto"/>
                        <div className="h-9 px-2">
                            <p className="w-full text-sm">Legend</p>
                            <p className="w-full text-xs">Switch Profile</p>
                        </div>
                    </li>
                    <li>Account</li>
                    <li>Help Centre</li>
                    <li>Sign out of Netflix</li>
                </ul>
                <hr className=" mt-2 mb-3 border-[rgb(100,100,100)]"/>
                <ul className="list px-[10px]">
                    <li className="!text-white ">Home</li>
                    <li>My List</li>
                    <li>Thrillers</li>
                    <li>Hindi Movies & TV</li>
                    <li>Children & Family</li>
                    <li>International Movies & TV</li>
                    <li>Reality, Variety & Talk Shows</li>
                    <li>Action</li>
                    <li>Anime</li>
                    <li>Comedies</li>
                    <li>Fantasy</li>
                    <li>Sci-fi</li>
                    <li>Tamil-Language Movies</li>
                    <li>Horror</li>
                    <li>Stand-up Comedy</li>
                    <li>Documentries</li>
                    <li>Bollywood</li>
                    <li>Hollywood</li>
                    <li>Romance</li>
                    <li>English Films</li>
                    <li>Dramas</li>
                </ul>
            </div>
            }

        </navbar>
    )
}
export default Navbar;