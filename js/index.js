// when #hamburgerIcon is clicked, toggle class hidden of #hamburger-menu

document.querySelector('#hamburgerIcon').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});

document.querySelector('#exitIcon').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});

// add delay of about 1 second so the user doesnt accidentally scroll before it is ready
setTimeout(function () {
  document.querySelectorAll('.projects').forEach((project) => {
    project.addEventListener('mouseover', function () {
      project.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  });
}, 1000);