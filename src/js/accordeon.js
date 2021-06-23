import 'core-js/stable';

function accordeonComponent(
  btnsSelector,
  itemsSelector,
  activeClass1,
  activeClass2
) {
  const accordeonBtns = document.querySelectorAll(btnsSelector);
  const tabItems = document.querySelectorAll(itemsSelector);

  accordeonBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      const tab = e.target.closest(itemsSelector);

      if (!tab) return;

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
