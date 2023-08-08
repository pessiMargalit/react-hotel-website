
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Hotel } from './hotelWebsite/Hotel';
import { About } from './hotelWebsite/About';
import { Cart } from './hotelWebsite/Cart';
import { Home } from './hotelWebsite/Home';
import { Navbar } from './hotelWebsite/Navbar';
import { OurStory } from './hotelWebsite/OurStory';
import { AboutUs } from './hotelWebsite/AboutUs';
import { CheckOut } from './hotelWebsite/CheckOut';
import { Footer } from './hotelWebsite/Footer';
import { Location } from './hotelWebsite/Location';
import { Suites } from './hotelWebsite/Suites';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Rooms' element={<Hotel />} />
            <Route exact path='/Suites' element={<Suites/>} />
            <Route exact path='/About' element={<About><OurStory></OurStory><AboutUs></AboutUs></About>} />
            <Route exact path='/Resevation' element={<Cart />} />
            <Route exact path='/Location' element={<Location />} />
            <Route exact path='/CheckOut' element={<CheckOut/>} />
          </Routes>  
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
