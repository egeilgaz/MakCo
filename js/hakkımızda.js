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

//sticky menu
$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
});

const carouselslide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselslide.style.transform = 'translateX(' + -size * counter + 'px)';

prevbtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselslide.style.transition = 'transform 0.6s ease-in-out';
  counter++;
  carouselslide.style.transform = 'translateX(' + -size * counter + 'px)';
});
nextbtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselslide.style.transition = 'transform 0.6s ease-in-out';
  counter--;
  carouselslide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselslide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastclone') {
    carouselslide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselslide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (carouselImages[counter].id === 'firstclone') {
    carouselslide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselslide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});

