import React from 'react';

import car from '../assets/images/car.png'
import van from '../assets/images/vans.png'
import truck from '../assets/images/truck.png'
import Footer from './footer'
import Button from './ui/button'

const Services = () => {
  return <><div class="container">

      <div>
          <h3>
              Tarjoamme laadukkaita autopesupalveluita kaikenkokoisille henkilö-, paketti- ja kuorma-autoille.
          </h3>
      </div>
      <div class="contents">


          <div class="content washcars">
              <div class="service">
                  <div class="washcars details">
                     
                      <div class="service-item-heading">
                          <h1>Henkilöauto</h1>
                          <img src={car} alt="cars" class="content-img car" />
                      </div>


                      <div class="service-item">

                          <h1>Basic Pesu</h1>
                          <p>Normaali likaisen henkilöauton käsinpesu</p>
                      </div>
                      <div class="service-item">
                          <h1>Deluxe Pesu</h1>
                          <p>Normaali likaisen henkilöauton käsinpesu ja kumimattojen pesu</p>
                      </div>
                      <div class="service-item">
                          <h1>Premium Pesu</h1>
                          <p>Normaali likaisen henkilöauton pesu, lisäksi imurointi, ikkunoiden- ja kumimattojen pesu
                          </p>
                      </div>
                      <div class="service-item">
                          <h1>Talvirenkaiden Vaihtopalvelu</h1>
                          <p>vaihdamme kesärenkaasi talvirenkaisiin ja pesemme ne puhtaiksi</p>
                      </div>
                  </div>
                  <div class="service-price">
                      <div>29€</div>
                      <div>34€</div>
                      <div>49€</div>
                      <div>35€</div>
                  </div>


              </div>



          </div>

          <div class="content washvans">
              <div class="washvans details">
                  <div class="service-item-heading">
                      <h1>Pakettiauto</h1><img src={van} alt="van svg" class="content-img van" />
                  </div>
                  <div class="service-item">

                      <h1>Basic Pesu</h1>
                      <p>Normaali likaisen
                          pakettiauton pesu</p>
                  </div>
                  <div class="service-item">
                      <h1>Deluxe Pesu</h1>
                      <p>Normaali likaisen
                          Ison pakettiauton
                          pesu. Esim Sprinter, Ducato</p>
                  </div>
                  <div class="service-item">
                      <h1>Talvirenkaiden Vaihtopalvelu</h1>
                      <p>vaihdamme kesärenkaasi talvirenkaisiin ja pesemme ne puhtaiksi</p>
                  </div>

              </div>
              <div class="service-price">
                  <div>32€</div>
                  <div>45€</div>
                  <div>35€</div>



              </div>


          </div>

          <div class="content washtrucks">
              <div class="washtrucks details">
                  <div class="service-item-heading">
                      <h1>Kuorma-auto </h1><img src={truck} alt="truck" class="content-img truck" />
                  </div>
                  <div class="service-item">
                      <h1>Keskikoko</h1>
                      <p>Normaali likainen
                          kuorma-auto keskikoko</p>
                  </div>
                  <div class="service-item">
                      <h1>Isokoko</h1>
                      <p>Normaali likaisen
                          ison kuorma-auton pesu</p>
                  </div>
                  <div class="service-item">
                      <h1>Lavakourma Auto</h1>
                      <p>Normaali likaisen lavakuorma-auton pesu</p>
                  </div>
                  <div class="service-item">
                      <h1>Tavaratilan</h1>
                      <p>Kuorma-auton tavaratilan pesu</p>
                  </div>
              </div>
              <div class="service-price trucks-price">
                  <div>62€</div>
                  <div>75€</div>
                  <div>75€</div>
                  <div>75€</div>
              </div>
          </div>
      </div>
  </div>
  <div className='service-book-btn'>
    <Button text="Book Now" /></div>
  ;
    
        <Footer/>
    </>
  
  
  ;
};

export default Services;
