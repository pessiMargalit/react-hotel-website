import { useSelector} from "react-redux";
import '../hotelWebsite/Hotel.css'
import backImg4 from '../images/room.jpg';
import { useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Detailes } from "./Detailes";

export function Hotel() {
  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
   }, [])
  const rooms = useSelector((state) => state.roomsReducer);
  return (
    <>
      <header class="header" style={{background:`linear-gradient(rgba(82, 71, 67, 0.5), rgba(97, 40, 14, 0.5)),url(${backImg4})`}}>
      <h1 id='p'>
      Our rooms
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { document.getElementById("cardClass").scrollIntoView({ behavior: "smooth" })}} style={{ marginTop: "20vh", zIndex: 1, color: "white" }} width="60" height="40" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
      </svg>
    </header>
    <br></br>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' id="cardClass">
      {rooms.arr.map((room, index) => (  
         
        <MDBCol>
           {room.category=="guest room"&& 
          <MDBCard className='h-100'>
            <MDBCardImage
              src={room.img}
              alt='...'
              position='top'
              style={room.qty === 0?{"opacity":"50%"}:{"opacity":"100%"}}
            />
            <MDBCardBody>
              <MDBCardTitle style={{ color: "black" }}>{room.name}</MDBCardTitle>
              <MDBCardText style={{ color: "black" }}>
                Price: {room.price}$
              </MDBCardText>
              <Detailes room={room} disabled={room.qty === 0 ? true : false}></Detailes>
            </MDBCardBody>
          </MDBCard>}
        </MDBCol>
 
      ))}</MDBRow>

    </>
  )


}
