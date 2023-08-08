import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/addToCart";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import '../hotelWebsite/Detailes.css'
import { decreaseQty } from "../redux/actions/decreaseQty";
import Date from '../hotelWebsite/Date.js';

export function Detailes(props) {
    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    const dispach = useDispatch();

    return (
        <>

            <button id="button" onClick={handeShow}> Detailes</button>
            <Modal id="modal" show={show} onHide={handeClose} >

    
                <div id="modalStyle" style={{ background: `linear-gradient(rgba(239, 223, 215, 0.201),rgba(62, 61, 61, 0.669)),url(${props.room.img})` }}>
                    <div id="innerModal">
                    <h3 id="roomName">{props.room.name}</h3>
                    <h5>price: {props.room.price}$</h5>
                    <h5>{props.room.description}</h5>
                    
                    <button className="button" >Book to <Date></Date></button>
                    <button className="button" onClick={handeClose}>close <i class="bi bi-x-lg"></i></button>
                   
                    <button className="button" disabled={props.room.qty === 0 ? true : false} onClick={(e) => {
                        e.preventDefault();
                        dispach(decreaseQty(props.room.id));
                        dispach(addToCart(props.room.name, props.room.id, props.room.price, props.room.img, props.room.qty, props.room.numOfooms, props.room.description))
                        setShow(false);
                    }}>Book now <i class="bi bi-clipboard-check"></i></button>
                    </div>
                </div>
            </Modal>


        </>
    )

}