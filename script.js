const menuButtons = document.querySelectorAll('.menu__item');
const panels = document.querySelectorAll('.panel');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.section;

    menuButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    panels.forEach((panel) => {
      const shouldShow = panel.dataset.section === target;
      panel.classList.toggle('is-visible', shouldShow);
    });
  });
});
