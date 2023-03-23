const items = document.querySelectorAll('.questions__item-title');
const questions = document.querySelectorAll('.questions__item');
const questionsDescription = document.querySelectorAll(
  '.questions__item-description'
);

items.forEach((item, index) => {
  questionsDescription[0].style.height = `${questionsDescription[0].scrollHeight}px`;
  item.addEventListener('click', (e) => {
    for (let i = 0; i < questions.length; i++) {
      if (index === i) {
        if (questions[i].classList.contains('active')) {
          questions[i].classList.remove('active');
          questionsDescription[i].style.height = ``;
        } else {
          questionsDescription[
            i
          ].style.height = `${questionsDescription[i].scrollHeight}px`;
          questions[i].classList.add('active');
        }
      } else {
        questionsDescription[i].style.height = ``;
        questions[i].classList.remove('active');
      }
    }
  });
});
