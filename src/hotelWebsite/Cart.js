import"../hotelWebsite/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import backImg from"../images/Resevation.jpg"
import { addQty } from "../redux/actions/addQty";
import { decreaseQty } from "../redux/actions/decreaseQty";
import { drop } from "../redux/actions/drop";
import { addToCart } from "../redux/actions/addToCart";
import { deleteFromCart } from "../redux/actions/deleteFromCart";
import { resetqty } from "../redux/actions/resetqty";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Cart() {
  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
   }, [])
  const roomsInCart = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const [isEmpty,setIsEmpty] = useState(roomsInCart.arr.length==0?true:false); 
  const Minus = (room) => {
    dispach(addQty(room.id));
    dispach(deleteFromCart(room.id))
    room.finallPrice = (room.finallPrice -= room.price);
  }
  const Plus = (room) => {
    dispach(decreaseQty(room.id));
    dispach(addToCart(room.name, room.id, room.price, room.img, room.qty, room.description))
    ; 
  }
  const emptyFunc = ()=>{
    setTimeout(function() {
      document.querySelector(".fly-in-text").removeClass("hidden");
    }, 500);
 }
 
  return (
  <>

    <header class="header" style={{background:`linear-gradient(rgba(49, 43, 41, 0.5), rgba(70, 29, 10, 0.5)),url(${backImg})`}}>
    <h1 id='p'>
      Resevation
    </h1>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { document.getElementById("theResevation").scrollIntoView({ behavior: "smooth" })}} style={{ marginTop: "20vh", zIndex: 1, color: "white" }} width="60" height="40" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
      </svg>
  </header>
    <div id="theResevation">
   {!isEmpty&&(<>
      <MDBContainer id="resevationId" className="py-5 h-100" style={{margin:"auto"}}>
        <MDBRow className="justify-content-center align-items-center h-100">
          {roomsInCart.arr.map((room, index) => (

            <MDBCard className="rounded-3 mb-4" >
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src={room.img}
                      alt="Hotel room" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3" >
                    <p className="lead fw-normal mb-2">{room.name}</p>
                    <p>
                      <p className="lead fw-normal mb-2">Price: {room.price}$</p>
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="2"
                    className="d-flex align-items-center justify-content-around">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" style={{ marginBottom: "1.5vh" }}
                      onClick={() => { room.qty > 1 ? Minus(room) : console.log(); }} class="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                    <p>{room.qty}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" style={{ marginBottom: "1.5vh" }}
                      onClick={() => { room.qty < room.numOfooms ? Plus(room) : console.log(); }} class="bi bi-plus" viewBox="0 0 16 16" >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </MDBCol>
                  <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <h5 style={{color:"black"}}> {room.finallPrice}$</h5>
                     
                  </MDBCol>
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                      onClick={() => { dispach(drop(room.id)); dispach(resetqty(room.id));   roomsInCart.arr.length==0?setIsEmpty(true):setIsEmpty(false);}}>
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          
          ))}

        </MDBRow>
      </MDBContainer>

      <h3>Total price: {roomsInCart.arr.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(0)} $</h3>

      <button onClick={(e) => {
        let i = roomsInCart.arr.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(0)
        navigate(`/CheckOut`,{state:{totalPrice:i}});
      }}> Check out</button>
      </>)}
      {isEmpty && (emptyFunc())}
      {isEmpty&&(
        
        <div  id="emptyCart">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-bag-x" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>

        <h1 id="emptyH1">You didn't choose any room yet</h1>
        </div>
      )}
      </div>
  </>
  )
}

//https://codepen.io/jpbelley/pen/QXBZjo
//https://codepen.io/techgirldiaries/pen/ZEezjpR
//https://codepen.io/abirana/pen/vYEqqEy
//https://codepen.io/jpbelley/pen/ExYMjeo
//https://codepen.io/jpbelley/pen/WNeOmpq
//https://codepen.io/jpbelley/pen/pXxpBZ
//