import '../hotelWebsite/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ResevationModal } from './ResevationModal';
export function Navbar() {
    const navigate = useNavigate();
    function changeCss() {
        var navElement = document.querySelector("nav");
        var logoElement = document.querySelector(".logo");
        var homeElement = document.querySelector("#home");
        var aboutElement = document.querySelector("#about");
        var roomsElement = document.querySelector("#rooms");
        var locationElement = document.querySelector("#location");
        var resevationElement = document.querySelector("#resevation");
        var suitesElement = document.querySelector("#suites");
        var IconElement = document.querySelector("#icon");
        if (this.scrollY > 100) {
            navElement.style.backgroundColor = "white"
            logoElement.style.color = "black";
            homeElement.style.color = "#978471";
            aboutElement.style.color = "black";
            roomsElement.style.color = "black";
            locationElement.style.color = "black";
            resevationElement.style.color = "black";
            suitesElement.style.color = "black";
            IconElement.style.color = "black"; 
        }
        else {
            navElement.style.backgroundColor = "#ffffff00";
            logoElement.style.color = "white";
            homeElement.style.color = "white";
            aboutElement.style.color = "white";
            roomsElement.style.color = "white";
            locationElement.style.color = "white";
            resevationElement.style.color = "white";
            suitesElement.style.color = "white";
            IconElement.style.color = "white"; 
        }
    }
    window.addEventListener("scroll", changeCss, false);
    return (
        <>
            <nav class="navbar">

                <div class="logo" >M&D</div>
                <div class="nav-links">
                    <ul class="nav-menu">
                        <li class="active"><a id='home' onClick={(e) => { navigate(`/`) }}>Home</a></li>
                        <li><a id='about' onClick={(e) => { navigate(`/About`) }} >About Us</a></li>
                        <li><a id='rooms' onClick={(e) => { navigate(`/Rooms`) }} >Rooms</a></li>
                        <li><a id='suites' onClick={(e) => { navigate(`/Suites`) }} >Suites</a></li>
                        <li><a id='resevation' onClick={(e) => { navigate(`/Resevation`) }} >Resevation</a></li>
                        <li><a id='location' onClick={(e) => { navigate(`/Location`) }} >Location</a></li>
                        <li id='icon'><ResevationModal></ResevationModal></li>
                    </ul>
                </div>
                <i class='bx bx-grid-alt menu-hamburger'></i>
            </nav>

        </>)
}