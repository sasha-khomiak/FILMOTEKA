const { height: pageFooterHeight } = document
  .querySelector('.footer')
  .getBoundingClientRect();
document.body.style.paddingTop = `${pageFooterHeight}px`;
