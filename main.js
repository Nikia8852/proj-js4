(function waitForElementsAndInit() {
  const wrapper = document.querySelector(".hero__wrapper");
  const btns = document.querySelector(".hero__btns");
  const video = document.querySelector(".hero-video__wrapper");
  const content = document.querySelector(".events__content");
  const items = document.querySelectorAll(".events__item");

  if (!wrapper || !btns || !video || !content || items.length < 2) {
    setTimeout(waitForElementsAndInit, 100);
    return;
  }

  let lastScreenState = null;

  function moveElements() {
    const isLarge = window.innerWidth > 1511;
    if (lastScreenState === isLarge) return;

    if (isLarge) {
      wrapper.appendChild(btns);
      items[1].after(content);
    } else {
      wrapper.insertBefore(btns, video);
    }

    lastScreenState = isLarge;
  }

  moveElements();
  window.addEventListener("resize", moveElements);
})();
