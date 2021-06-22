import 'core-js/stable';

function accordeonComponent(
  btnsSelector,
  itemsSelector,
  activeClass1,
  activeClass2
) {
  const accordeonBtns = document.querySelectorAll(btnsSelector);
  const tabItems = document.querySelectorAll(itemsSelector);
  console.log('accordeonBtns: ', accordeonBtns);
  console.log('tabItems: ', tabItems);

  accordeonBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      const tab = e.target.closest(itemsSelector);
      console.log('tab: ', tab);

      if (!tab) return;

      // tab.classList.toggle(activeClass1);
      tab.classList.toggle(activeClass2);
    });
  });
}

accordeonComponent(
  '.accordeon__header',
  '.accordeon__item',
  'accordeon__item_active',
  'open'
);
