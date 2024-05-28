// script.js

// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Change navbar background on scroll
  window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.background = '#333';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
  };
  