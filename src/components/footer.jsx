import React from 'react'

import face from '../assets/images/Facebook_f_logo_(2021).svg.png'
import insta from '../assets/images/Instagram.svg.png'

const footer = () => {
  return (
    <div><footer>
    <div class="footer">
      <div class="social-links">
        <a href="https://www.facebook.com/profile.php?id=100091911247724" target="_blank" rel="noreferrer">
          <img src={face} alt="Facebook" /></a>

        <a href="https://www.instagram.com/tuupakan_autopesu/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" /></a>
      </div>

      <div class="contact-info">
        <p>Tuupakantie 4
        </p>
        <p>Vantaa 01740</p>
        <p>+358400155020</p>
        <p>tuupakanautopesu@gmail.com</p>
      </div>

      <div class="copyright">
        <h1>&copy; 2023 Tuupakan Autopesu. All rights reserved.</h1>
      </div>
    </div>
  </footer></div>
  )
}

export default footer