const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;

  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.11;
  ringY += (mouseY - ringY) * 0.11;

  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';

  requestAnimationFrame(animateRing);
}

animateRing();

document.querySelectorAll('a, button, .btn, .card').forEach(function (element) {
  element.addEventListener('mouseenter', function () {
    document.body.classList.add('hovering');
  });

  element.addEventListener('mouseleave', function () {
    document.body.classList.remove('hovering');
  });
});

const gallery = document.getElementById('homePhotoGallery');
const leftArrow = document.querySelector('.gallery-arrow-left');
const rightArrow = document.querySelector('.gallery-arrow-right');

if (gallery && leftArrow && rightArrow) {
  leftArrow.addEventListener('click', function () {
    gallery.scrollBy({
      left: -340,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', function () {
    gallery.scrollBy({
      left: 340,
      behavior: 'smooth'
    });
  });
}
