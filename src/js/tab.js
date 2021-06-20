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
    console.log('btns: ', btns);
    console.log('items: ', items);

    btns.forEach((btn) => btn.classList.remove(btnActiveClass));
    items.forEach((item) => item.classList.remove(tabActiveClass));
  }

  function turnOnActive(btns, tabs, i, wrapper) {
    console.log('btns: ', btns);
    console.log('tabs: ', tabs);
    console.log('i: ', i);
    console.log('wrapper: ', wrapper);

    btns[i].classList.add(btnActiveClass);
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
