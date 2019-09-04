//petit uyarısı
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
