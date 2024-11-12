import React from 'react';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterHours from '../FooterHours/FooterHours';
import FooterContact from '../FooterContact/FooterContact';
import FooterSocial from '../FooterSocial/FooterSocial';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import StatusButton from '../StatusButton/StatusButton';
import './Footer.css';
import '../../index.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer_main_container">
      <div className="logo_about_Follow">
        <FooterLogo />
      </div>
      <FooterHours />
      <FooterContact />
      <FooterSocial />
    </div>
    <FooterCopyright />
    <BackToTopButton />
    <StatusButton />
  </footer>
);

export default Footer;