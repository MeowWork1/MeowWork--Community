// Banner klik alert
const banner = document.querySelector('.banner');
if(banner){
  banner.addEventListener('click', () => alert('Selamat datang di MeowWork Community!'));
}

// Tombol program
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => alert('Terima kasih sudah mendukung program ini!'));
});
