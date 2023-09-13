const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', mobileMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
    }
  });


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
let switchBtns = document.querySelectorAll(".pricing-switch button");
for (let btn of switchBtns){
  btn.addEventListener("click",function(e){
    for (let btns of switchBtns){
      if(btns.classList.contains("active")){
        btns.classList.remove("active");
      }
    }

    e.target.classList.add("active");
  })
}
