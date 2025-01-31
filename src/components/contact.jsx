import React from 'react';
import '../assets/contact.css';
import Footer from './footer'

const Contact = () => {
  return<><div class="contact-container">
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
<Footer/></> 
;
};

export default Contact;
