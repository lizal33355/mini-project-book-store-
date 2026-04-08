function buyNow(link) {
  window.open(link, '_blank');
}

function scrollToBooks() {
  document.getElementById('books').scrollIntoView({
    behavior: 'smooth'
  });
}
