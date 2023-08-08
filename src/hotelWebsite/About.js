import React from "react";
import { useState } from "react";
import backImg4 from '../images/About.jpg';
import { useEffect } from "react";
export function About(props) {
    const countComp = React.Children.count(props.children);
    const compArray = React.Children.toArray(props.children);
    const [index, setIndex] = useState(0);
    useEffect(() => {
       window.scrollTo({top:0,left:0,behavior:"smooth"});
      }, [])
    function GetComp(index) {
        if (index === countComp) {
            setIndex(0);
        }

        return (

            <>{compArray[index]}</>
        )
    }
    return (
        <>
            <header class="header" style={{ background: `linear-gradient(rgba(82, 71, 67, 0.5), rgba(97, 40, 14, 0.5)),url(${backImg4})` }}>
                <h1 id='p'>
                    About us
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { document.getElementById("aboutId").scrollIntoView({ behavior: "smooth" }) }} style={{ marginTop: "20vh", zIndex: 1, color: "white" }} width="60" height="40" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg>
            </header>
            <br></br>
            <div id="aboutId">
                <p>
                    <i style={{ float: "right", marginTop: "45vh", marginRight:"1.5vw"}}  onClick={() => GetComp(setIndex(index + 1))} class="bi bi-chevron-compact-right fa-2x"></i>
                    <i style={{ float: "left", marginTop: "45vh",marginLeft:"1.5vw" }} onClick={() => GetComp(setIndex(index + 1))} class="bi bi-chevron-compact-left fa-2x"></i>
                    <div>{GetComp(index)}</div>
                </p>

            </div>
        </>
    )
}