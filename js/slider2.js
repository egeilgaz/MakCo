//telefon slider js
const carouselslide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

const prevbtn2 = document.querySelector('#prevbtn2');
const nextbtn2 = document.querySelector('#nextbtn2');

let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselslide2.style.transform = 'translateX(' + -size2 * counter2 + 'px)';

prevbtn2.addEventListener('click', () => {
  if (counter2 >= carouselImages2.length - 1) return;
  carouselslide2.style.transition = 'transform 0.6s ease-in-out';
  counter2++;
  carouselslide2.style.transform = 'translateX(' + -size2 * counter2 + 'px)';
});
nextbtn2.addEventListener('click', () => {
  if (counter2 <= 0) return;
  carouselslide2.style.transition = 'transform 0.6s ease-in-out';
  counter2--;
  carouselslide2.style.transform = 'translateX(' + -size2 * counter2 + 'px)';
});

carouselslide2.addEventListener('transitionend', () => {
  if (carouselImages2[counter2].id === 'lastclone2') {
    carouselslide2.style.transition = 'none';
    counter2 = carouselImages2.length - 2;
    carouselslide2.style.transform = 'translateX(' + -size2 * counter2 + 'px)';
  }
  if (carouselImages2[counter2].id === 'firstclone2') {
    carouselslide2.style.transition = 'none';
    counter2 = carouselImages2.length - counter2;
    carouselslide2.style.transform = 'translateX(' + -size2 * counter2 + 'px)';
  }
});
