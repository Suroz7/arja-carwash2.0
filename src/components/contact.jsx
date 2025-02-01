import React from 'react';
import '../assets/contact.css';
import Footer from './footer'
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpeg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpeg'
import img9 from '../assets/images/img9.jpeg'
import img10 from '../assets/images/img10.jpeg'
import img11 from '../assets/images/img11.jpeg'
import img12 from '../assets/images/img12.jpeg'
import img13 from '../assets/images/img13.jpeg'
import ImageSlider from './ui/imageslider';



const Contact = () => {
  return<>
  <div class="contact-container">
  <h2>Tietoa Meistä</h2>
  <h4>
      Tuupakan Autopesu on sitoutunut tarjoamaan ajoneuvollesi sen ansaitsemaa huolenpitoa ja huomiota. Intohimomme autoja ja ympäristöä kohtaan on saanut meidät uudistamaan autopesukokemusta.
  </h4>
  <p><strong>Meidän Sitoutumisemme:</strong></p>
  <ul>
      <li>🌿 <em>Ympäristöystävällistä Laatua</em>: Olemme ylpeitä sitoutumisestamme ympäristöön. Korkeatehoiset painepesurimme ja laadukkaat ympäristöystävälliset puhdistusaineemme takaavat moitteettoman kiillon samalla kun säilytämme luonnon kauneuden.</li>
      <li>🛡️ <em>Ei Kompromisseja Laadussa</em>: Ajoneuvosi hyvinvointi on meille ensisijainen tavoite. Taitava tiimimme, viimeisintä huutoa oleva laitteisto ja huippulaatuiset puhdistustuotteemme takaavat korkeimman puhtauden standardin, niin sisältä kuin ulkoa.</li>
      <li>🕐 <em>Mukavuutta Sinun Ehdoillasi</em>: Ymmärrämme kiireisen aikataulusi. Siksi tarjoamme joustavat aukioloajat ja palvelut, jotka vastaavat tarpeitasi.</li>
      <li>👤 <em>Ystävällisiä Ammattilaisia</em>: Tiimimme koostuu ystävällisistä ja helposti lähestyttävistä ammattilaisista, jotka ovat intohimoisia autosi ulkonäöstä. Odota lämmintä vastaanottoa ja moitteetonta lopputulosta.</li>
      <li>🤲 <em>Yhteisöllinen Osallistuminen</em>: Tuupakan Autopesu ei ole vain autopesu; se on osa yhteisöäsi. Osallistumme aktiivisesti paikallisiin aloitteisiin ja hyväntekeväisyyteen, osoittaen sitoutumisemme palvelemaamme aluetta.</li>
  </ul>
  <p className='contact-bottom-line'>Kutsuvat sinut kokemaan Tuupakan Autopesu eron itse. Liity meihin huolehtimaan autostasi ja planeetastamme yhdellä vierailulla. Odotamme innolla sinua perheemme jäsenenä.</p>

</div>

<ImageSlider/>

<Footer/>
</> 
;
};

export default Contact;
