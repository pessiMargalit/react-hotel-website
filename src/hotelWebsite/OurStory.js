import aboutImg from '../images/Hotel_bar.jpg';
export function OurStory(props) {
    return (
        <>
            <h1>United Arab Emirates’s oldest luxury hotel company</h1>
            <img src={aboutImg} style={{ margin: "4vw" }}></img>
            <br></br>

            <p style={{ height: "20vh", width: "40vw", color: " #978471", marginLeft: "30vw", textAlign: " left", marginBottom: "30vh", fontFamily: 'Raleway' }}>
                United Arab Emirates's
                oldest luxury hotel company
                From Berthold M&D’s humble roots as a Berlin-based wine merchant back in 1897, the M&D brand has come a long way. Now with spectacular hotels on several continents, we are proud of every step we have taken on this remarkable journey. And while much has changed, we’ve also taken great care to remain authentic and true to our heritage.

                We ensure our guests are the foundation around which we craft every part of the travel experience. We select the destinations and sculpt the properties that fit perfectly with our vision and the dreams of our discerning guests. Whether it’s lovingly renovated iconic landmarks or modern architectural masterpieces, style, quality and individuality permeate every one of our hotels. Our pools, spas, gyms, bars and restaurants are the epitome of elegance.

            </p>

        </>
    )
}