import { createUsers, red } from './requests.js';
import { toast } from './toast.js';

const registerUser = () => {
  const inputs = document.querySelectorAll('.create-user__input');
  const button = document.querySelector('#register__submit');
  const backButton = document.querySelector('#redirect__button');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const createBody = {};
    let count = 0;

    inputs.forEach((input) => {
      input.value.trim() === ''
        ? count++
        : (createBody[input.name] = input.value);
    });

    if (count !== 0) {
      return toast('Por favor, preencha todos os campos necessários', red);
    } else {
      createUsers(createBody);
    }
  });

  backButton.addEventListener('click', () => {
    location.replace('../../index.html');
  });
};

registerUser();
