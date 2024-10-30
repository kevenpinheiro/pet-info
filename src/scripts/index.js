import { loginRequest, red } from './requests.js';
import { toast } from './toast.js';

const authentication = () => {
  const token = localStorage.getItem('@petinfo:token');

  if (token) {
    location.replace('../src/pages/feed.html');
  }
};

const handleLogin = () => {
  const inputs = document.querySelectorAll('.login__input');
  const button = document.querySelector('.login__button');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const loginBody = {};
    let count = 0;

    inputs.forEach((input) => {
      input.value.trim() === ''
        ? count++
        : (loginBody[input.name] = input.value);
    });

    if (count !== 0) {
      return toast('Por favor, preencha todos os campos necessários', red);
    } else {
      loginRequest(loginBody);
    }
  });
};

handleLogin();
authentication();
