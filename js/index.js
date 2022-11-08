// when #hamburgerIcon is clicked, toggle class hidden of #hamburger-menu

document.querySelector('#hamburgerIcon').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});

document.querySelector('#blurbg').addEventListener('click', function () {
  document.querySelector('#hamburger-menu').classList.toggle('hidden');
});

// when #code is scrolled into view, animate it with class animate-slide-and-fade-in

const code = document.querySelector('code');
const codeObserver = new IntersectionObserver(function (entries, codeObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('animate-slide-and-fade-in');
      entry.target.classList.add('visible')
      codeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

codeObserver.observe(code);
