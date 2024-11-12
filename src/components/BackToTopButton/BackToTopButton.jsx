import React from 'react';

const BackToTopButton = () => (
  <button id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <i className="fa-solid fa-chevron-up"></i>
  </button>
);

export default BackToTopButton;
