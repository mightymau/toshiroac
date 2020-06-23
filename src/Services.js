import React from 'react';

function Services() {
  return (
<div className="container services">

<h1 className="mt-4 mb-3">Services</h1>

<img className="img-fluid rounded mb-4" src="/img/service_3.jpg" alt="service" />

<div className="row">
  <div className="col-lg-4 mb-4">
    <div className="card h-100">
      <h4 className="card-header"> General / Regular Maintenance Service	</h4>
      <div className="card-body">
        <p className="card-text">
          <ul>
    <li>Cleaning of evaporator coils</li>
    <li>Cleaning of condenser coils</li>
    <li>Cleaning of condensate drain pans</li>
    <li>Clearing of condensate water drainage systems</li>
    <li>Cleaning of blower wheels and blades</li>
    <li>Checking of all electrical components</li>
    <li>Checking of all settings</li>
    <li>Checking of refrigerant systems</li>
  </ul>
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 mb-4">
    <div className="card h-100">
      <h4 className="card-header">Chemical Cleaning Service</h4>
      <div className="card-body">
        <p className="card-text">
    <ul>
      <li>Dismantling of indoor cooler units for chemical cleaning</li>
      <li>Chemical cleaning of indoor cooling coils</li>
      <li>Cleaning of outdoor condenser coils</li>
    <li>Cleaning of indoor cooler drain pans</li>
    <li>Clearing of water condensation drainage systems</li>
    <li>Cleaning of blower wheels and blades</li>
    <li>Checking of all electrical components</li>
    <li>Checking of all settings</li>
    <li>Re-installation of indoor cooler units</li>
    <li>Checking of refrigerant systems</li>
    <li>Topping up of refrigerant</li>
  </ul>
</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 mb-4">
    <div className="card h-100">
      <h4 className="card-header">Air Conditioning Installation</h4>
      <div className="card-body">
        <p className="card-text">Whether you are looking to install a cooling unit for the first time or you are looking to replace your old unit, count on Toshiro to install your air conditioner precisely! Our technicians measure your home to find the perfect cooling unit that meets your efficiency needs and budget. We install industry leading air conditioners.</p>
  </div>
    </div>
  </div>
</div>

</div>
  );
}

export default Services;
