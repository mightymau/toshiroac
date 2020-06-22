import React from 'react';
import './App.css';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Nav from './components/Nav'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Bg1 from './img/metromanila.jpg'
import Bg2 from './img/main1.png'
import Bg3 from './img/commercial.jpg'


function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <h1>Hello</h1>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

const Home = () => (
  <header>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active" style={{backgroundImage: `url(${Bg1})`}}>
        <div className="carousel-caption">
          <h3>We Service All Make And Models – Air Conditioner Installation in Metro Manila</h3>
          <p>Our air conditioner repair team is capable of servicing all makes and models. Even if you haven’t replaced your HVAC unit for many years, we’ll be able to help. We have plenty of experience in the field and can work on older and newer equipment.</p>
        </div>
      </div>
    
      <div className="carousel-item" style={{backgroundImage: `url(${Bg2})`}}>
        <div className="carousel-caption text-dark">
          <h3>A Reliable HVAC Contractor Which Promises to Get Your HVAC Needs Done Quickly and On Time!</h3>
          <p>We provide superior heating, ventilation, air conditioning services. We repair and install all makes and models of furnaces, heating systems, air conditioning systems, and hot water heaters.</p>
        </div>
      </div>
      <div className="carousel-item" style={{backgroundImage: `url(${Bg3})`}}>
        <div className="carousel-caption text-dark">
          <h3>We Accommodate Residential And Commercial Clients</h3>
          <p>Each and every one of our clients is unique. We’re happy to be able to meet and help such a diverse client base. At the same time, we are comprehensively well rounded to ensure we’re capable of satisfying everyone’s needs. Our team has been trained thoroughly to guarantee that we’ll be able to meet the needs and expectations of residential and commercial clients.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</header>

)
export default App;
