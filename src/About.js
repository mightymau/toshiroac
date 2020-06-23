import React from 'react';

import ImgRepair from './img/aircon_repair.png'
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

function About() {
  return (
    <React.Fragment>
    <div class="container about">
    <h1 className="mt-4 mb-3">Company Profile</h1>

    <div className="row">
      <div className="col-lg-6">
        <img className="img-fluid rounded mb-4" src={ImgRepair} alt="Repair" />
      </div>
      <div className="col-lg-6">
        <p>As one of the most important companies in home appliance industry in the world. We commit ourselves to R & D, production, sales and service of air conditioning, refrigerating and other home appliance products. Ranging from household air conditioner, commercial air conditioner, household refrigerator, kitchen appliance etc. </p>
        <p>We are a large high-tech enterprise with a sales office in Shenzhen CBD, and factories in Foshan and Shenzhen, China. Our factory possesses a high-tech industrial park with land coverage of 8000, 000 square meters, and dozens of modernized production lines with an annual production capacity up to 12 million units of air conditioners, refrigerator, kitchen appliance and other home appliance. </p>
        <p>After many years of rapid development, MoreTrade has achieved a lot, and “YONAN” brand become a leading brand home appliance industry. Its sales network for air conditioner, refrigerator, kitchen appliance and other home appliance covered more than 150 countries and regions. Now MoreTrade has become one of the most important manufacturers in China, and the fastest developing enterprise in home appliance industry. Especially during the world financial crisis, MoreTrade adjusts the sales policy immediately, sharing the losses with customers in crisis, and sticking together with customers in difficulty, which has been highly appreciated by customers worldwide. </p>
        <p>It is MoreTrade’s corporate spirit that guarantees its rapid, stable, efficient development. Replying on human resources and managing by trust, we hold the business principle of "Quality is the basis of enterprise’s existence, science and technology is the suaranty of enterprise’s benefits, and brand & reputation is the power of enterprice development", and emphasize on technology and innovation. After making efforts for many years, MoreTrade has accomplished lots of research results and owned many core technologies. Up to now, MoreTrade products has passed more than 200 global authoritative certifications. </p>
        <p>MoreTrade firmly believes that success comes from efforts, and prospect goes with challenge. Moretrade team will constantly pursue efficiency and innovation to improve overall management skill, and maintain high-speed development. To achieve a better tomorrow, MoreTrade will keep on continuous innovation, and “YONAN” brand will definitely be acknowledged has a famous brand in the world.</p>
      </div>
    </div>

    <h2>Our Brands</h2>
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
  </div>
  </React.Fragment>
  );
}

export default About;
