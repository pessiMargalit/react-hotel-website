import "../hotelWebsite/CheckOut.css";
import React from "react";
import anime from "animejs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch } from "react-redux";
import { resetResevation } from "../redux/actions/resetResevation";
export function CheckOut(props) {
  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  useEffect(() => {
    alert("Are you sure you want to book your resevation now?");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])
  const dispach = useDispatch();
  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm('service_rsyfofg', 'template_6w4olej', form.current, 'iVFzIvcvciERqYUUZ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    dispach(resetResevation());
    document.querySelector("#ResevatioSuccess").style.display = "block";
  };

  class CreditCard extends React.Component {
    state = {
      cardNumber: "**** **** **** ****",
      cardHolderName: "",
      cardExpirationDate: "",
      cardCVV: " ",
      cardType: <i class='fa fa-credit-card' style={{ color: '#978471' }}></i>
    };
    flipCard = () => {
      anime({
        targets: ".credit-card-inner",
        rotateY: "180deg",
        duration: "100",
        easing: "linear"
      });
    };
    unFlipCard = () => {
      anime({
        targets: ".credit-card-inner",
        rotateY: "360deg",
        duration: "100",
        easing: "linear"
      });
    };
    setCardType = type => {
      this.setState({ cardType: type });
    };
    checkSubstring = (length, match) => {
      return this.state.cardNumber.substring(0, length) === match;
    };
    setNumber = e => {
      const cardNumber = e.target.value;
      this.setState({ cardNumber }, () => {
        const { cardNumber } = this.state;
        if (cardNumber[0] === "4") {
          this.setCardType("Visa");
        } else if (this.checkSubstring(4, "6011")) {
          this.setCardType("Discover");
        } else if (this.checkSubstring(2, "51")) {
          this.setCardType("MasterCard");
        } else if (this.checkSubstring(2, "34")) {
          this.setCardType("American Express");
        } else if (this.checkSubstring(3, "300")) {
          this.setCardType("Diners Club");
        } else if (this.checkSubstring(2, "35")) {
          this.setCardType("JCB");
        } else {
          this.setCardType(<i class='fa fa-credit-card' style={{ color: '#978471' }}></i>);
        }
      });
    };
    setName = e => {
      const cardHolderName = e.target.value.toUpperCase();
      this.setState({ cardHolderName });
    };
    setDate = e => {
      let data = (e.target.value).split("");
      console.log(data)
      let cardExpirationDate = (data.map((x) => {
        return x === "-" ? "/" : x
      })).join("");
      console.log(cardExpirationDate)
      this.setState({ cardExpirationDate });
    };
    setCVV = e => {
      const cardCVV = e.target.value;
      this.setState({ cardCVV });
    };
    render() {
      const {
        cardNumber,
        cardHolderName,
        cardExpirationDate,
        cardCVV,
        cardType
      } = this.state;
      return (
        <div className="container">
          <div className="credit-card">
            <div className="credit-card-inner">
              <div className="credit-card-front">

                <div id="card-type">{cardType}</div>
                <div id="card-number">{cardNumber}</div>

                <div id="card-expiration">
                  {cardExpirationDate !== "" && <div id="validthru">Valid Thru</div>}
                  {cardExpirationDate}
                </div>

                <div id="card-holder-name">{cardHolderName}</div>
              </div>
              <div className="credit-card-back">
                <div className="card-stripe" />
                <div className="card-sig-container">
                  <div className="signature">{cardHolderName}</div>
                  CVC {cardCVV}
                </div>
                <p className="credits">Built with Cleave.js, Anime.js, and React Icons.</p>
              </div>
            </div>
          </div>
          <form className="card-form" ref={form} onSubmit={sendEmail}>
            <label className="input-label">Credit Card Number</label>
            <input
              placeholder="Enter your credit card number"
              options={{ creditCard: true }}
              id="number-input"
              name="number-input"
              className="text-input"
              maxLength="16"
              onChange={e => { if (e.target.value >= 0) { this.setNumber(e) } }}
            />
            <label className="input-label">Card Holder Name</label>
            <input
              name="to_name"
              type="text"
              placeholder="Enter card holder name"
              value={cardHolderName}
              onChange={e => this.setName(e)}
              className="text-input"
              maxLength="30"
            />
            <div className="date-and-csv" style={{ display: "flex" }}>
              <div
                style={{ display: "flex", flexDirection: "column", width: "50%" }}
              >
                <label className="input-label">
                  Expiration Date
                </label>
                <input
                  type="month"
                  placeholder="Enter expiration date"
                  className="text-input"
                  onChange={e => this.setDate(e)}
                  style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", width: "50%" }}
              >
                <label className="input-label">CVC Security Code</label>
                <input
                  options={{
                    numeral: "true"
                  }}
                  placeholder="Enter CVC"
                  maxLength="3"
                  value={cardCVV}
                  className="text-input"
                  onChange={e => { if (e.target.value >= 0) { this.setCVV(e) } }}
                  onFocus={this.flipCard}
                  onBlur={this.unFlipCard}
                />

              </div>
            </div>
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              className="text-input"
              placeholder="Enter your email" />
            <input id='button' type="submit" value="Book now"/>
          </form>
          <h3 id="ResevatioSuccess" style={{display:"none"}}>Your resevation has been complited!</h3>
        </div>
      );
    }
  }

  const form = useRef();

  return (
    <>
      <div id="background"></div>
      <CreditCard />
      <h3 >Total price :{totalPrice}$</h3>
      <div id="app" />
    </>
  )
}
