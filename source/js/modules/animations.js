export default () => {
  window.addEventListener(`load`, function () {
    document.body.classList.add(`load`);

    let linksMenu = document.querySelector('.js-menu');
    let box = document.querySelector('.animation-box');
    linksMenu.addEventListener('click', (e) => {
      let target = e.target;
      let dataHref = target.getAttribute("data-href");
      if (dataHref === 'prizes') {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    })
  });
};
