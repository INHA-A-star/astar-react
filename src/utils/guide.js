(() => {
  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = `${i}`;
    graphicElems[i].dataset.index = `${i}`;
  }

  function activate() {
    currentItem.classList.add('visible');
  }

  function inactivate() {
    currentItem.classList.remove('visible');

  }

  window.addEventListener('scroll', () => {
    let step;
    let boundRect;

    for (let i = ioIndex - 1; i <= ioIndex + 1; i++) {
      step = stepElems[i];
      if (!step) {
        continue;
      }

      boundRect = step.getBoundingClientRect();

      if (boundRect.top > window.innerHeight * 0.1 && boundRect.top < window.innerHeight * 0.8) {
        inactivate();
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();