import aboutImg from '../images/lobby3.jpg';
export function AboutUs(props) {
    return (
        <> 
          <h1>A journey through our captivating constellation</h1>
          <div style={{overflow:"hidden"}}>
        <img src={aboutImg} style={{margin:  "4vw"}}></img>
        </div>
            <br></br>
            <p style={{ height: "20vh",width: "40vw" ,color:" #978471" , marginLeft:  "30vw",fontFamily: 'Raleway',marginBottom:"30vh"}}>
                For more than 125 years,
                M&D has been welcoming guests to spectacular destinations
                in the most stunning style. Together we’ve
                explored the world and discovered new places,
                possibilities and horizons. The very epitome of luxury,
                our brand is passionate about creating and crafting rich, 
                meaningful and memorable experiences for every guest.
            </p>

        </>
    )
}