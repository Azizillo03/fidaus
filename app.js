
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    dots: true,
    infinite: false,
    speed: 300,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    autoHeight: true,
  });

  document.querySelector('.square').onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
};

window.addEventListener('scroll', function () {
  var square = document.querySelector('.square');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    square.classList.add('square-animation');
    return;
  }

  square.classList.remove('square-animation');

});
