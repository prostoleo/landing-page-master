window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log('ScrollTrigger: ', ScrollTrigger);

  let tl = gsap.timeline({});

  tl.from('.content-hero__left-col', {
    duration: 1.25,
    ease: 'Power4.easeOut',
    x: '-30%',
    opacity: 0,
    delay: 0.75,
  });

  let tlSection = gsap.timeline({});

  //=====================================
  //todo 1 вариант - работает! - класс для скыртия не активен в scss
  /* gsap.set('.download-section', {
    opacity: 0,
    y: '20%',
  });

  ScrollTrigger.create({
    markers: true,
    trigger: '.download-section',
    start: '-10% 50%',
    end: 'bottom 90%',

    onEnter: ({ isActive }) => {
      if (isActive) {
        tlSection.to('.download-section', {
          duration: 1.5,
          // opacity: 0,
          // y: '20%',
          opacity: 1,
          y: 0,
        });
      }
    },
  }); */

  //=====================================
  //todo 2 вариант - пробую с классом из scss - не получилось!
  /* // gsap.set('.download-section', {
  //   opacity: 0,
  //   y: '20%',
  // });

  gsap.to('.download-section', {
    scrollTrigger: {
      markers: true,
      trigger: '.download-section',
      start: '-10% 50%',
      end: 'bottom 90%',
      toggleClass: 'hidden',
      // ease: 'power2',
    },
  }); */

  //=====================================
  //todo 3 вариант - отдельно timeline с scrollTrigger - а затем навешиваем анимацию - работает!

  /* let tlSections = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: '.download-section',
      start: '-10% 50%',
      end: 'bottom 90%',
    },
  });

  tlSections.from('.download-section', {
    opacity: 0,
    y: '20%',
  }); */

  //=====================================
  //todo 4 вариант - аналогично 3 - но ко всем нужным секциям

  //* не первая и не последняя секция
  const allSectionsNotFirstAndLast = [
    ...document.querySelectorAll('section'),
  ].filter((el, i, arr) => i !== 0 && i !== arr.length - 1);

  console.log('allSectionsNotFirstAndLast: ', allSectionsNotFirstAndLast);

  allSectionsNotFirstAndLast.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: '20%',
      duration: 1,
      ease: 'Power2.easeOut',
      delay: 0,

      scrollTrigger: {
        // markers: true,
        trigger: section,
        // start: '-5% 25%',
        start: '-20% 25%',
        // end: 'bottom 90%',
      },
    });
  });
});
