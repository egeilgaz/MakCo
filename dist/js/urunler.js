//petit uyarısı
var petit = document.getElementById('petit');
petit.onclick = function() {
  window.alert('Yakında Petit Princess Cakery sayfamız hizmetinizde olacaktır');
};
//slider
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
