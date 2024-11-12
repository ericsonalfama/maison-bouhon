/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../index.css';
const FooterSocial = () => (
  <div className="textwidget">
    <h3 className="footer_h3">Suivez-nous</h3>
    <ul className="social-icons">
      <li>
            <a href="https://www.facebook.com/p/Maison-Bohuon-100095453833505/?locale=fr_FR">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
     </li>
      <li>
            <a href="https://www.instagram.com/maison.bohuon/">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
    </ul>
  </div>
);

export default FooterSocial;
