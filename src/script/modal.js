const modal = document.querySelector('.modal');
const overflow = document.querySelector('.overflow');
const buttonModalPlane = document.querySelector('[data-modal=plane]');
const buttonModalQuestion = document.querySelector('[data-modal=question]');
const modalTitle = document.querySelector('.modal__title');
const formAll = document.querySelectorAll('form');
const modalSuccess = overflow.querySelector('.modal__success');

overflow.addEventListener('click', (e) => {
  const target = e.target;
  const textareaModal = document.querySelector('.modal__textarea');
  textareaModal.style.display = 'none';

  if (
    target.closest('.modal__close') ||
    target.className.indexOf('overflow') > -1
  ) {
    modalSuccess.style.display = 'none';
    overflow.classList.remove('active');
  }
});

buttonModalPlane.addEventListener('click', (e) => {
  modalTitle.textContent =
    'Оставьте ваши контакты, чтобы мы отправили планировку';
  overflow.classList.add('active');
});

buttonModalQuestion.addEventListener('click', (e) => {
  const textareaModal = document.querySelector('.modal__textarea');
  modalTitle.textContent = 'Не нашли ответ, задайте свой вопрос?';
  textareaModal.style.display = 'block';
  overflow.classList.add('active');
});

formAll.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e.target);
    if (e.target.closest('.modal__contact')) {
      e.target.closest('.modal__contact').style.display = 'none';
    }
    overflow.classList.add('active');

    modalSuccess.style.display = 'block';
  });
});
