import "../hotelWebsite/ResevationModal.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import {
  MDBCard,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
export function ResevationModal() {
  const roomsInCart = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handeClose = () => setShow(false);
  const handeShow = () => setShow(true);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" onClick={handeShow}>
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
      </svg>
      <Modal show={show} onHide={handeClose}>
        <Modal.Body className="h-100" style={{ backgroundColor: "white" }}>
          <MDBContainer id="resevationModal" className="py-5 h-100" style={{ margin: "auto", width: "20vw"}}>
            <MDBRow className="justify-content-center align-items-center h-100" >
              {roomsInCart.arr.map((room, index) => (
                <MDBCard className="rounded-3 mb-4" >

                        <img id="imgResevationModal" src={room.img}></img>
                        <h5 style={{color:"black"}}>{room.name}</h5>
                        <h5 style={{color:"black"}}>Price: {room.price}$</h5>
                </MDBCard>
              ))}
                <button id="checkOutBtn" onClick={(e) => {
                  navigate(`/Resevation`);
                  setShow(false);
                }}> Check out</button>
            </MDBRow>
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </>
  )
}