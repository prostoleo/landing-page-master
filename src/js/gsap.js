import 'core-js/stable';

window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});

  tl.from('.content-hero__left-col', {
    duration: 1.25,
    ease: 'Power4.easeOut',
    x: '-30%',
    opacity: 0,
    delay: 0.75,
  });

  //* не первая и не последняя секция
  const allSectionsNotFirstAndLast = [
    ...document.querySelectorAll('section'),
  ].filter((el, i, arr) => i !== 0 && i !== arr.length - 1);

  allSectionsNotFirstAndLast.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: '20%',
      duration: 1,
      ease: 'Power2.easeOut',
      delay: 0,

      scrollTrigger: {
        trigger: section,
        start: '-20% 25%',
      },
    });
  });
});
