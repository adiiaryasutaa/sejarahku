/**
 * When window scrolled Y > 184, navbar will added 'scrolled' class.
 * If not, It remove navbar 'scrolled' class.
 * 
 * @author Adi Aryasuta
 * @since Sunday, September 26, 2021
 */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 184);
});