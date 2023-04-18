
// знаходження кнопки "скрол вверх"
const topButton = document.querySelector('.scrollToTopBtn');
window.onscroll = function () {
  scrollFunction();
};

// вішаємо слухач події на кнопку скролу вверх
topButton.addEventListener('click', topFunction);

// функція додавання скролу в точці перелому
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}
// 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
