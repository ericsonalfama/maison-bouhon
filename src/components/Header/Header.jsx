// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import MySwiper from '../Swiper/Swiper';
import logo from '../../assets/Logo_Maison_Bohuon.jpg';
import Rating from '../Rating/Rating';

import '../../index.css';
const Header = () => {
  return (
    <header className="slider">
      <div id="nav_logo_container">
        <img src={logo} alt="Logo Maison Bohuon" id="bakery_logo" />
      <Rating/>
      </div>
      <MySwiper />
    </header>
  );
};

export default Header;
