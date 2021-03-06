import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/toshiro_logo.png'


function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
		<div className="collapse navbar-collapse navbar-top">
			<div className="slogan">Quality Airconditioning Sales & Services</div>
			<div className="social-media">
				<a className="icon-facebook" href="http://www.facbook.com">facebook</a>
				<a className="icon-twitter" href="http://www.twitter.com">twitter</a>
				<a className="icon-instagram" href="http://www.instagram.com">instagram</a>
			</div>
		</div>
		<div className="logocontact">
        	<a className="navbar-brand" href="index.php"><img src={Logo} alt="Toshiro"/></a>
			<div className="collapse navbar-collapse contact">
				<div>
					<a className="icon-mail" href="mailto:contact@toshiroac.com">contact us</a><br /><span className="contact-info">contact@toshiroac.com</span>
				</div>
				<div>
					<a className="icon-phone" href="mailto:contact@toshiroac.com">call us</a><br /><span className="contact-info">+632 8880 4456</span>
				</div>
				<div>
					<a className="icon-question" href="mailto:contact@toshiroac.com">request a quote</a><br /><span className="contact-info">request for service?</span>
				</div>
			</div>
	        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>
		</div>
        
		
		
        <div className="collapse navbar-collapse" id="navbarResponsive">		
          <ul className="navbar-nav justify-content-center d-flex flex-f rounded">
            <Link to="/" exact>
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            </Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="about">About Toshiro</a>
            </li>
            </Link>
            <Link to="/products">
            <li className="nav-item">
              <a className="nav-link" href="products">Products</a>
            </li>
            </Link>
            <Link to="/services">
            <li className="nav-item">
              <a className="nav-link" href="services">Services</a>
            </li>
            </Link>
            <Link to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
            </li>
            </Link>         
          </ul>
        </div>
    </nav>
   
    );

}

export default Nav