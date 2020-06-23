import React from 'react';

function Contact() {
  return (
<div className="container contactpage">

<div className="row">
  <div className="col-lg-8 mb-4">
<iframe title="locationmap" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3862.7946417613125!2d120.99802396474675!3d14.496475162823376!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1540704684063" width="100%" height="400" frameborder="0" style={{border:0 }}allowfullscreen></iframe>
  </div>
  <div className="col-lg-4 mb-4">
    <h3>Contact Details</h3>
    <address>
      #60, C-5 ext. cor. Multinational Avenue,
      <br />La Huerta, Parañaque City
      <br />
    </address>
    <p>
      <abbr title="Phone">P</abbr>: (123) 456-7890
    </p>
    <p>
      <abbr title="Email">E</abbr>:
      <a href="mailto:contact@toshiroac.com">contact@toshiroac.com
      </a>
    </p>
    <p>
      <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
    </p>
  </div>
</div>
<div className="row">
  <div className="col-lg-8 mb-4">
    <h3>Send us a Message</h3>
    <form name="sentMessage" id="contactForm" novalidate>
      <div className="control-group form-group">
        <div className="controls">
          <label>Full Name:</label>
          <input type="text" className="form-control" id="name" required />
          <p className="help-block"></p>
        </div>
      </div>
      <div className="control-group form-group">
        <div className="controls">
          <label>Phone Number:</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
      </div>
      <div className="control-group form-group">
        <div className="controls">
          <label>Email Address:</label>
          <input type="email" className="form-control" id="email" required />
        </div>
      </div>
      <div className="control-group form-group">
        <div className="controls">
          <label>Message:</label>
          <textarea rows="10" cols="100" className="form-control" id="message" required maxlength="999"></textarea>
        </div>
      </div>
      <div id="success"></div>
      <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
    </form>
  </div>

</div>

</div>
  );
}

export default Contact;
