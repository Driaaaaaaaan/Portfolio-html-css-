document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth Scroll =====
  const navLinks = document.querySelectorAll('.navdiv ul li a[href^="#contact"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile menu after click
      document.querySelector('.navdiv ul').classList.remove('active');
    });
  });

  // ===== Hamburger Menu Toggle =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navdiv ul');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // ===== Continuous Typewriter Effect =====
  const words = ["Programmer.", "Designer.", "Gamer."];
  let i = 0, j = 0;
  let isDeleting = false;
  const speed = 120, delay = 2000;
  const h2 = document.querySelector('#home h2');

  function typeWriter() {
    const currentWord = words[i];
    if (isDeleting) {
      h2.textContent = currentWord.substring(0, j--);
    } else {
      h2.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriter, delay);
    } else if (isDeleting && j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(typeWriter, speed);
    }
  }

  h2.textContent = "";
  typeWriter();
});
