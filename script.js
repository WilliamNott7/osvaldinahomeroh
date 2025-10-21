
document.addEventListener('DOMContentLoaded', function() {
  // Animação de contagem dos números
  function animateNumbers() {
      const counters = document.querySelectorAll('.proof-number');
      const speed = 200;
      
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / speed;
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(() => animateNumbers(), 1);
          } else {
              counter.innerText = target + '+';
          }
      });
  }
  
  // Observador de interseção
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(animateNumbers, 500);
          }
      });
  });
  
  observer.observe(document.querySelector('.social-proof-section'));
  
  // Animações de entrada suave
  function animateOnScroll() {
      const elements = document.querySelectorAll('.proof-card, .testimonial-card');
      
      elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              element.style.animation = `countUp 0.6s ease forwards ${index * 0.1}s`;
          }
      });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  });
  








 const text = "Osvaldina Homeroh é uma criadora de conteúdos apaixonada por Skincare e Dublagem, entregando dicas autênticas e vídeos envolventes que conectam com quem valoriza autocuidado e criatividade. Para parcerias e colaborações, clique no botão abaixo.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


