import React from 'react';
import autopesu from "../assets/images/autopesu.jpg" 
import Card from './ui/card'
import './ui/card.css'
import './ui/button.css'
import Button from './ui/button'
import map from '../assets/images/map.png'
import face from '../assets/images/Facebook_f_logo_(2021).svg.png'
import insta from '../assets/images/Instagram.svg.png'
import { Droplet, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    name: "Basic Wash",
    price: "€15",
    features: ["Exterior Wash", "Rinse & Dry", "Tire Cleaning"],
    icon: <Droplet className="text-blue-500" size={32} />,
  },
  {
    name: "Premium Wash",
    price: "€25",
    features: ["Wax Coating","Exterior & Interior Cleaning",  "Vacuum & Dashboard Polish"],
    icon: <Sparkles className="text-yellow-500" size={32} />,
  },
  {
    name: "Deluxe Wash",
    price: "€40",
    features: ["Everything in Premium", "Engine Bay Cleaning", "Ceramic Coating Option"],
    icon: <ShieldCheck className="text-green-500" size={32} />,
  }
];

const Home = () => {
  return <div>
    <section className="hero-section">
      <div className="hero-image">

        <img src={autopesu} alt="Clean car being washed" />
      </div>
      <div className="hero-content">
        <h1>Get Your Car Sparkling Clean in Minutes!</h1>
        <p className="tagline">Eco-friendly, fast, and affordable car washes!</p>
        <div className="cta-buttons">
        <Button className='cta-btn' text="Book Now" />
        
        </div>
      </div>
    </section>

    <section className="service-section py-12 px-6 text-center">
      <div className='service-center'>
        <div> <h2 className=" services-head text-3xl font-bold mb-6">Our Services</h2></div>
        <div className='service-box'>  <div className="service-list grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} service={service}>
            </Card>

          )
          )}
        </div><Button text="Book Now" /></div></div>
        
    </section>


    <section>

      <div className='whyus'>
        <div>
          <h2>Why choose us?</h2></div>
        <div>
          <ul>
            <li>Fast Service – Get your car washed in 15 minutes.</li>
            <li>Eco-Friendly Products – Safe for your car & the environment.</li>
            <li>Affordable Pricing – Best value in town.</li>
            <li>Satisfaction Guarantee – If you’re not happy, we’ll rewash for free.</li>
          </ul></div>
        <Button text="Book Now" /></div>
    
</section>
  <section className='findus'>
      <div>
        <h2>Find us here</h2></div>
      <div className='map'>
        <img src={map} alt="Map showing location" />
      </div>
    </section>
    
    <div>
      <footer>
        <div class="footer">
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100091911247724" target="_blank" rel="noreferrer">
              <img src={face} alt="Facebook logo" /></a>

            <a href="https://www.instagram.com/tuupakan_autopesu/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram logo" /></a>
          </div>

          <div class="contact-info">
            <p>Tuupakantie 4
            </p>
            <p>Vantaa 01740</p>
            <p>+358400155020</p>
            <p>tuupakanautopesu@gmail.com</p>
          </div>

          <div class="copyright">
            <p>&copy; 2023 Tuupakan Autopesu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
</div>;
};

export default Home;
