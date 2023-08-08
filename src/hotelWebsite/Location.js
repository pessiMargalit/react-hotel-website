import { useEffect } from "react";
import backImg from "../images/location.jpg";
export function Location(){
    useEffect(() => {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
       }, [])
    return(
        <>
         <header class="header" style={{background:`linear-gradient(rgba(82, 71, 67, 0.5), rgba(97, 40, 14, 0.5)),url(${backImg})`}}>
      <h1 id='p'>
      Our location
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { document.getElementById("locationId").scrollIntoView({ behavior: "smooth" })}} style={{ marginTop: "20vh", zIndex: 1, color: "white" }} width="60" height="40" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
      </svg>
    </header>
        <iframe id="locationId" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6428677638037!2d55.19359458456858!3d25.113947841234957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbc791a5955%3A0x812f7cc89a449584!2sMD%20Hotel%20-%20By%20Gewan!5e0!3m2!1siw!2sil!4v1672066153655!5m2!1siw!2sil" 
        style={{width :"100vw" , height : 400}} ></iframe>
        </>
    )
}