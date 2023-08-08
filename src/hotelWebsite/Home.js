import '../hotelWebsite/Home.css';
import backImg1 from '../images/lobby1_.JPG';
import backImg2 from '../images/Hotel_entrence.jpg';
import backImg3 from '../images/Hotel_building.jpg';
import suitesImg from '../images/room7.JPG';
import roomImg from '../images/room1.JPG';
import { FaChargingStation } from "react-icons/fa";
import { CiWifiOn, CiForkAndKnife, CiDumbbell } from "react-icons/ci";
import { MdSmokeFree, MdPool } from "react-icons/md";
import { GiMagicBroom, GiSittingDog } from "react-icons/gi";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const images = [backImg1, backImg2, backImg3,];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const intervalId = setInterval(() => {
      console.log(currentIndex)

      setCurrentIndex(prevCount => prevCount + 1);
    }, 5000)

    return () => { clearInterval(intervalId) };
  }, [])
  if (currentIndex === images.length) {
    setCurrentIndex(0);
  }
  return (<>
    <header class="header" style={{ background: `linear-gradient(rgba(82, 71, 67, 0.5), rgba(97, 40, 14, 0.5)),url(${images[currentIndex]})`, zIndex: -1 }}>
      <h1 id='p'>
        M&D  HOTEL
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { document.getElementById("homeId").scrollIntoView({ behavior: "smooth" }) }} style={{ marginTop: "20vh", zIndex: 1, color: "white" }} width="60" height="40" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
      </svg>
    </header>
    <div id='homeId'>
      <section id='roomsSection'>
        <img style={{ float: "right" ,paddingLeft:"4vw"}} id='roomsImg' src={roomImg} onClick={(e) => { navigate(`/Rooms`) }}></img>
        <p>
          <h3>Rooms</h3>
          <br></br>
          <h4>
          Our rooms are known for maximum comfort, exclusive design and the peaceful atmosphere they infuse.
In each room you will find a luxurious double bed, a spacious jacuzzi, and a balcony with a panoramic view overlooking the Burj Khalifa tower.          </h4></p>
      </section>
      <section id='suitesSection'>
        <img id='suiteImg' style={{ float: "left", marginBottom: "10vh" ,paddingRight:"4vw"}} onClick={(e) => { navigate(`/Suites`) }} src={suitesImg}></img>
        <p>
          <h3>Suites</h3>
          <br></br>
          <h4 >
          Our luxury suites were designed and designed by the architect Malhoi Paladitch to an international standard 
          that is invested and meticulous. The set of items that make up our suite will only make you want to stay here longer. 
          </h4></p>
      </section>
    </div>
    <div style={{ clear: "both" }} id="iconsDiv">
      <h2 >Our amenities</h2 >
      <div class="row" id='amenities'>

        <div class="col-3">
          <ul >
            <li><CiWifiOn /><span>Free WiFi</span></li>
            <li><CiForkAndKnife /><span>On-site restaurant</span></li>
            <li><MdSmokeFree /><span>Non-smoking rooms</span></li>
            <li><GiMagicBroom /><span>Room service</span></li>
          </ul>
        </div>
        <div class="col-3">
          <ul>
            <li><MdPool /><span>Indoor pool</span></li>
            <li><FaChargingStation /><span>EV charging</span></li>
            <li><CiDumbbell /><span>Fitness center</span></li>
            <li><GiSittingDog /><span>Pets not allowed</span></li>
          </ul>
        </div>
      </div></div>
    <div>
      <iframe id="locationId" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6428677638037!2d55.19359458456858!3d25.113947841234957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbc791a5955%3A0x812f7cc89a449584!2sMD%20Hotel%20-%20By%20Gewan!5e0!3m2!1siw!2sil!4v1672066153655!5m2!1siw!2sil"
        style={{ width: "100vw", height: 400 }} ></iframe>
    </div>

  </>
  )
}
