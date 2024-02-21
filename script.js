const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})

let resizeTimer
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper")
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper")
  }, 400)
})

// // Remove the transition class
// const square = document.querySelector('.square');
// square.classList.remove('square-transition');

// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       square.classList.add('square-transition');
//       return;
//     }

//     square.classList.remove('square-transition');
//   });
// });

// observer.observe(document.querySelector('.square-wrapper'));