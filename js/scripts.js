// Modal handling
const openModal = document.querySelectorAll('.modal-open');
const closeModal = document.querySelectorAll('.modal-close');
const modal = document.querySelectorAll('.modal');

openModal.forEach((button, item) => {
  button.addEventListener('click', () => {
    modal[item].showModal();
  });
});

closeModal.forEach((button, item) => {
  button.addEventListener('click', () => {
    modal[item].close();
  });
});
