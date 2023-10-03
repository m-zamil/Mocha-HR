//Accordion Script
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//Button switch
let switchBtns = document.querySelectorAll('.pricing-switch button');
for (let btn of switchBtns) {
  btn.addEventListener('click', function (e) {
    for (let btns of switchBtns) {
      if (btns.classList.contains('active')) {
        btns.classList.remove('active');
      }
    }

    e.target.classList.add('active');
  });
}

const switchbtn = document.querySelectorAll('.pricing-switch button');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');

switchbtn[0].addEventListener('click', function () {
  price1.textContent = '$49';
  price2.textContent = '$199';
});
switchbtn[1].addEventListener('click', function () {
  price1.textContent = '$32';
  price2.textContent = '$101';
});

// Swiper slider
var swiper = new Swiper('.swiper', {
  a11y: false,
  freeMode: true,
  speed: 4000,
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
