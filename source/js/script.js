let mainHeader = document.querySelector('.page-header');
let headerToggle = document.querySelector('.page-header__logo-toggle');

mainHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('page-header--closed')) {
    mainHeader.classList.remove('page-header--closed');
    mainHeader.classList.add('page-header--opened');
  } else {
    mainHeader.classList.add('page-header--closed');
    mainHeader.classList.remove('page-header--opened');
  }
});
