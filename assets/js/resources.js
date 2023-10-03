var emailModal = document.getElementById('emailModal');
var previewModal = document.getElementById('previewModal');
var downloadBtns = document.querySelectorAll('.downloadBtn');
var previewBtns = document.querySelectorAll('.previewBtn');

const closeBtn1 = document.querySelector('.close-1');
const closeBtn2 = document.querySelector('.close-2');

downloadBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    emailModal.classList.add('visible');
  });
});

previewBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    previewModal.classList.add('visible');
  });
});

closeBtn1.addEventListener('click', function () {
  emailModal.classList.remove('visible');
});

closeBtn2.addEventListener('click', function () {
  previewModal.classList.remove('visible');
});
