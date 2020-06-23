import React from 'react';

import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Nav from './components/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Bg1 from './img/metromanila.jpg'
import Bg2 from './img/main1.png'
import Bg3 from './img/commercial.jpg'

import ImgService from './img/service.png'
import ImgSharp from './img/brands/sharp.png'
import ImgPanasonic from './img/brands/panasonic.png'
import ImgGree from './img/brands/gree.png'
import ImgLg from './img/brands/lg.png'
import ImgDaikin from './img/brands/daikin.png'
import ImgFujitsu from './img/brands/fujitsu.png'
import ImgCarrier from './img/brands/carrier.png'
import ImgKelvinator from './img/brands/kelvinator.png'
import ImgKolin from './img/brands/kolin.png'
import ImgMitsubishi from './img/brands/mitsubishi.png'
import ImgSamsung from './img/brands/samsung.png'
import ImgElectrolux from './img/brands/electrolux.png'

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
  <React.Fragment>
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

<div className="container">
<hr />
  <div className="row">
    <div className="col-lg-6">
      <h1>Quick Response & Prompt Service </h1>
      <p>That's why we respond to your call within hours, not days. If you need service at your home or business, we work with you to schedule a service call that's as quick and convenient as possible. Once your service call is scheduled, we'll be at your front door on time and ready to work. We service:
</p>
      <ul className="services-list">
        <li>
          <strong>Household Air Conditioner</strong>
        </li>
        <li>Commercial Air Conditioner</li>
        <li>Household Refrigerator</li>
        <li>Kitchen Appliance</li>
      </ul>
    </div>
    <div className="col-lg-6">
      <img className="img-fluid rounded" src={ImgService} alt="Service" />
    </div>
  </div>
<hr />
  
<div className="row brands">
<h1 className="my-4 text-center">We service all makes and models</h1>
</div>
  <div className="row">
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgSharp} alt="Sharp" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgPanasonic} alt="Panasonic"/>
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgGree} alt="Gree" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgLg} alt="LG" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgDaikin} alt="Daikin" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgFujitsu} alt="Fujitsu" />
    </div>
  </div>
  <div className="row">
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgCarrier} alt="Carrier" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgKelvinator} alt="Kelvinator" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgKolin} alt="Kolin" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgMitsubishi} alt="Mitsubishi" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgSamsung} alt="Samsung" />
    </div>
    <div className="col-lg-2 col-sm-4 mb-4">
      <img className="img-fluid" src={ImgElectrolux} alt="Electrolux" />
    </div>
  </div>

  <hr />
  <div className="row mb-4">
    <div className="col-md-8">
      <p>If you're looking for excellent service and a people-friendly approach, then you've come to the right place. At Toshiro Air Conditioning, Inc., our ultimate goal is to serve you and make your experience a pleasant one, and our team will stop at nothing to ensure that you come away more than satisfied.</p>
    </div>
    <div className="col-md-4">
      <a className="btn btn-lg btn-secondary btn-block" href="tel:555-555-5555">Call us Now</a>
    </div>
  </div>
</div>
</React.Fragment>

)
export default App;
