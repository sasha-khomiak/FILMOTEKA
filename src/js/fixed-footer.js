const { height: pageHederHeight } = document
  .querySelector('.footer')
  .getBoundingClientRect();
document.body.style.paddingTop = `${pageHederHeight}px`;
