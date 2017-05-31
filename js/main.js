var clickwu = document.querySelector('.map-content .btn');
var modalwu = document.querySelector('.modal-write-us');
var closewu = document.querySelector('.write-us-close');
clickwu.addEventListener('click', function (event) {
  event.preventDefault();
  modalwu.classList.add('modal-write-us-show');
});

closewu.addEventListener('click', function (event) {
  event.preventDefault();
  modalwu.classList.remove('modal-write-us-show');
});
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (modalwu.classList.contains('modal-write-us-show')) {
      modalwu.classList.remove('modal-write-us-show');
    }
  }
});

