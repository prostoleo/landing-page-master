import 'core-js/stable';



function tabComponent(
  tabBtnWrapperSelector,
  tabBtnsSelector,
  tabItemsSelector,
  btnActiveClass,
  tabActiveClass
) {
  const tabBtnsWrapper = document.querySelector(tabBtnWrapperSelector);
  const tabBtns = document.querySelectorAll(tabBtnsSelector);
  const tabItems = document.querySelectorAll(tabItemsSelector);

  /* console.log('tabBtnsWrapper: ', tabBtnsWrapper);
  console.log('tabBtns: ', tabBtns);
  console.log('tabItems: ', tabItems); */

  function clearState(btns, items) {
    /* console.log('btns: ', btns);
    console.log('items: ', items); */

    btns.forEach((btn) => btn.classList.remove(btnActiveClass));
    items.forEach((item) => item.classList.remove(tabActiveClass));
  }

  function turnOnActive(btns, tabs, i, wrapper) {
    /* console.log('btns: ', btns);
    console.log('tabs: ', tabs);
    console.log('i: ', i);
    console.log('wrapper: ', wrapper); */

    btns[i].classList.add(btnActiveClass);

    //* анимация для таба
    console.log('tabs[i].children: ', tabs[i].children);
    const children = Array.from(tabs[i].children);

    children.length > 0 && children.forEach((el, i) => {
      console.log('el: ', el);
      // console.log('gsap: ', gsap, i);

      gsap.from(el, {
        duration: 1,
        opacity: 0,
        // x: i % 2 === 0 ? '-50%' : '50%',
        transformOrigin: 'top center',
        rotationY: 60,
        // rotationZ: 10,
        // scaleY: 0,
      })
    })
    /* gsap.from(tabs[i], {
      opacity: 0,
      duration: 1,
      x: '-50%',
    }) */

    tabs[i].classList.add(tabActiveClass);
    wrapper.dataset.tab = +i;

    
  }

  tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      clearState(tabBtns, tabItems);
      turnOnActive(tabBtns, tabItems, i, tabBtnsWrapper);
    });
  });
}

tabComponent(
  '.tab__buttons',
  '.tab__btn',
  '.content-tab__item',
  'tab__btn_active',
  'content-tab__item_active'
);
