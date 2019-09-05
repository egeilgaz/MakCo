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

//slider js
/*
$(document).ready(function() {
  var slider = 0;
  $('.sliderbutton li:first').css('background', 'yellow');
  $.slider = function(toplam) {
    $('#slider li').hide();
    if (slider < toplam - 1) {
      slider++;
      $('.sliderbutton li').css('background', 'red');
      $('.sliderbutton li:eq(' + slider + ')').css('background', 'yellow');
      $('#slider li:eq(' + slider + ')').fadeIn('fast');
    } else if (slider < 0) {
      slider = toplam - 1;
      $('.sliderbutton li').css('background', 'red');
      $('.sliderbutton li:eq(' + slider + ')').css('background', 'yellow');
      $('#slider li:eq(' + slider + ')').fadeIn('fast');
    } else {
      $('#slider li:first').fadeIn('fast');
      slider = 0;
      $('.sliderbutton li').css('background', 'red');
      $('.sliderbutton li:eq(' + slider + ')').css('background', 'yellow');
    }
  };
  var lenghtli = $('#slider li').length;
  var interval = setInterval('$.slider(' + lenghtli + ')', 3000);
  $('#slider').hover(
    function() {
      interval = clearInterval(interval);
    },
    function() {
      interval = setInterval('$.slider(' + lenghtli + ')', 3000);
    }
  );
  $('.sliderbutton li').click(function() {
    $('.sliderbutton li').css('background', 'red');
    $(this).css('background', 'yellow');
    interval = clearInterval(interval);
    var indis = $(this).index();
    $('#slider li').hide();
    $('#slider li:eq(' + indis + ')').fadeIn('fast');
    slider = indis;
    interval = setInterval('$.slider(' + lenghtli + ')', 3000);
  });
  $('.sliderleft').click(function() {
    slider--;
    $('.sliderbutton li').css('background', 'red');
    if (slider < 0) {
      $('.sliderbutton li:last').css('background', 'yellow');
      slider = lenghtli - 1;
    } else {
      $('.sliderbutton li:eq(' + slider + ')').css('background', 'yellow');
    }
    $('#slider li').hide();
    $('#slider li:eq(' + slider + ')').fadeIn('fast');
  });
  $('.sliderright').click(function() {
    slider++;
    $('.sliderbutton li').css('background', 'red');
    if (slider > lenghtli - 1) {
      $('.sliderbutton li:first').css('background', 'yellow');
      slider = 0;
    } else {
      $('.sliderbutton li:eq(' + slider + ')').css('background', 'yellow');
    }
    $('#slider li').hide();
    $('#slider li:eq(' + slider + ')').fadeIn('fast');
  });
});*/

//sticky menu
$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
});
/*
//ana sayfa slider
var images = [
  '../img/show/1.jpg',
  '../img/show/2.jpg ',
  '../img/show/3.png ',
  '../img/show/4.jpg ',
  '../img/show/5.jpg ',
  '../img/show/6.jpg '
]; 
$(function() {
  var i = 0;
  $('#showcase').css('background-image', 'url(images/' + images[i] + ')');
  setInterval(function() {
    i++;
    if (i == images.length) {
      i = 0;
    }

    $('#showcase').fadeOut('slow', function() {
      $(this).css('background-image', 'url(images/' + images[i] + ')');
      $(this).fadeIn(200);
    });
  }, 5000);
});*/

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

/*mobile için hamburger menü
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu3');
const menuNav = document.querySelector('.menu2');
const navItem = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}*/
function opennav() {
  document.getElementById('nav').style.height = '500px';
}
function closenav() {
  document.getElementById('nav').style.height = '0%';
}

const openbtn = document.querySelector('.openbtn');
let showMenu = false;

openbtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showmenu) {
    openbtn.classList.add('close');
    showmenu = true;
  } else {
    openbtn.classList.remove('close');
    showMenu = false;
  }
}
