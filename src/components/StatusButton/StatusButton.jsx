import React, { useState, useEffect } from 'react';
import '../../index.css';

const StatusButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneIcon = <i className="fa-solid fa-phone"></i>;

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      setIsOpen(day >= 1 && day <= 6 && hour >= 6 && hour < 19);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className={`status-button ${isOpen ? 'open' : 'closed disabled'}`}
      onClick={() => isOpen && (window.location.href = 'tel:0375740661')}
    >
      <span id="status-indicator" className={isOpen ? 'green-circle' : 'red-circle'}></span>
      {isOpen ? `Ouvert - Appeler ` : 'Fermé'}
      {isOpen && phoneIcon}
    </button>
  );
};

export default StatusButton;
