$(document).ready(function() {
  //yukarı çık butonu
  $(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
      $('.yukarı').css('opacity', '1');
    } else {
      $('.yukarı').css('opacity', '0');
    }
  });

  $('.yukarı').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      200
    );
    return false;
  });
});






//ana sayfa slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

//petit hazırlık mesajı

var petit = document.getElementById('petit');
petit.onclick = function() {
  window.alert('Yakında Petit Princess Cakery sayfamız hizmetinizde olacaktır');
};


function opennav() {
  document.getElementById('nav').style.height = '500px';
}
function closenav() {
  document.getElementById('nav').style.height = '0%';
}

