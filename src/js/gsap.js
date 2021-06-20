window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log('ScrollTrigger: ', ScrollTrigger);

  let tl = gsap.timeline({
    /* defaults: {
      duration: 1.5,
      ease: 'Power4.easeOut',
    }, */
  });

  tl.from('.content-hero__left-col', {
    duration: 1.5,
    ease: 'Power4.easeOut',
    x: '-30%',
    opacity: 0,
    delay: 0.5,
  });

  /* let tlFeatures = gsap.timeline({
    ScrollTrigger: {
      trigger: '.hero-section',
      start: '200px bottom',
    },
  }); */

  /* tlFeatures.from('.features-section', {
    duration: 0.75,
    opacity: 0,
    y: '20%',
  }); */
  let tlSection = gsap.timeline({});

  tlSection.from('.download-section', {
    ScrollTrigger: {
      // trigger: '.download-section',
      start: 'top 90%',
      // toggleActions: 'restart pause reverse none',
    },
    duration: 5.75,
    opacity: 0,
    y: '20%',
  });
});
