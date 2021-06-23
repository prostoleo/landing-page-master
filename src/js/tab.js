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

  function clearState(btns, items) {
    btns.forEach((btn) => btn.classList.remove(btnActiveClass));
    items.forEach((item) => item.classList.remove(tabActiveClass));
  }

  function turnOnActive(btns, tabs, i, wrapper) {
    btns[i].classList.add(btnActiveClass);

    //* анимация для таба
    console.log('tabs[i].children: ', tabs[i].children);
    const children = Array.from(tabs[i].children);

    children.length > 0 &&
      children.forEach((el, i) => {
        console.log('el: ', el);

        gsap.from(el, {
          duration: 1,
          opacity: 0,
          transformOrigin: 'top center',
          rotationY: 60,
        });
      });

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
