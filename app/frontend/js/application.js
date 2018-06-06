import '../css/application.css';
import '../images/lagd.svg';

document.addEventListener('DOMContentLoaded', () => {
  const attendBtn = document.querySelector('#attend');
  const submitBtn = document.querySelector('#submit');

  attendBtn.classList.add('is-hovered');

  attendBtn.addEventListener('mouseenter', () => {
    console.log('1');
    attendBtn.classList.add('is-hovered');
    submitBtn.classList.remove('is-hovered');
  });

  submitBtn.addEventListener('mouseenter', () => {
    console.log('2');
    submitBtn.classList.add('is-hovered');
    attendBtn.classList.remove('is-hovered');
  });
});
