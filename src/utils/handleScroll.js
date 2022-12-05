export const handleScroll = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  const offsetTop = document.querySelector(target).offsetTop;
  window.scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
};
