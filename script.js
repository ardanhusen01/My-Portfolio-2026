  /* #region Particle Background Configuration */
  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 100,
              "density": { "enable": true, "value_area": 800 }
          },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": {
              "value": 0.5,
              "random": true,
              "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": { "enable": false }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.2,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out"
          }
      },
      "interactivity": {
          "detect_on": "window",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              }
          }
      },
      "retina_detect": true
  });
  /* #endregion */


  /* #region Page Navigation */
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              e.preventDefault();

              // Remove active class from all sections
              document.querySelectorAll('.page-section').forEach(sec => {
                  sec.classList.remove('active');
              });

              // Add active class to target section
              targetSection.classList.add('active');

              // Reset experience details
              const wrapper = document.getElementById('detailsWrapper');
              if (wrapper) {
                  wrapper.classList.remove('show');
              }
          }
      });
  });
  /* #endregion */


  /* #region Experience Toggle */
  function toggleDetails() {
      const wrapper = document.getElementById('detailsWrapper');
      wrapper.classList.toggle('show');
  }
  /* #endregion */


  /* #region Mobile Menu Toggle */
  function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');

      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  }

  function closeMenu() {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');

      if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
      }
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      const navbar = document.querySelector('.navbar');

      if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
      }
  });
  /* #endregion */


  /* #region Page Initialization */
  document.addEventListener('DOMContentLoaded', () => {
      console.log('🚀 Page initialized');
  });
  /* #endregion */


  /* #region Hard Skills Toggle */
  function toggleSkillDescription(element, skillId) {
      // Remove active class from all skill items
      document.querySelectorAll('.skill-item').forEach(item => {
          item.classList.remove('active');
      });

      // Add active class to clicked item
      element.classList.add('active');

      console.log(`✅ Hard skill activated: ${skillId}`);

      // Auto-hide on mouse leave
      element.addEventListener('mouseleave', function() {
          element.classList.remove('active');
          console.log(`❌ Hard skill deactivated: ${skillId}`);
      });
  }
  /* #endregion */


  /* #region Soft Skills Toggle */
  function toggleSoftSkillDescription(element, skillId) {
      // Remove active class from all soft skill items
      document.querySelectorAll('.soft-skill-item').forEach(item => {
          item.classList.remove('active');
      });

      // Add active class to clicked item
      element.classList.add('active');

      console.log(`✅ Soft skill activated: ${skillId}`);

      // Auto-hide on mouse leave
      element.addEventListener('mouseleave', function() {
          element.classList.remove('active');
          console.log(`❌ Soft skill deactivated: ${skillId}`);
      });
  }
  /* #endregion */


