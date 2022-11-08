// when #hamburgerIcon is clicked, toggle class hidden of #hamburger-menu

document.querySelector('#hamburgerIcon').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});

document.querySelector('#exitIcon').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});
