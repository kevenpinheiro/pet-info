import { closeModal, postEditModal } from './modal.js';
import { renderAllPosts } from './render.js';
import { deletePostById, newPost } from './requests.js';
import { toast } from './toast.js';

const authentication = () => {
  const token = localStorage.getItem('@petinfo:token');

  if (!token) {
    location.replace('../../index.html');
  }
};

const showUserMenu = () => {
  const menu = document.querySelector('.user__logout');
  const userAction = document.querySelector('.user__image');
  const userName = document.querySelector('.user__uniquename');
  const logout__button = document.querySelector('.logout__button');

  const infoUser = JSON.parse(localStorage.getItem('@petinfo:user'));

  userAction.src = infoUser.avatar;
  userName.innerText = infoUser.username;

  userAction.addEventListener('click', (event) => {
    menu.classList.toggle('hidden');
  });

  logout__button.addEventListener('click', () => {
    localStorage.clear();
    location.replace('../../index.html');
  });
};

export const createPost = () => {
  const modalController = document.querySelector('.modal-new-post__controller');
  const cancelButton = document.querySelector('.modal-cancel__button');
  const input = document.querySelector('#input1');
  const textarea = document.querySelector('#content');
  const publishButton = document.querySelector('#publishBtn');

  publishButton.addEventListener('click', (event) => {
    event.preventDefault();
    const postBody = {};
    let count = 0;

    input.value.trim() === '' ? count++ : (postBody[input.name] = input.value);

    textarea.value.trim() === ''
      ? count++
      : (postBody[textarea.name] = textarea.value);

    if (count !== 0) {
      return alert('Por favor, preencha todos os campos necessários');
    } else {
      newPost(postBody);
      input.value = '';
      textarea.value = '';

      modalController.close();
      renderAllPosts();
    }
  });
};

const handleDeletePost = () => {
  const deleteButtons = document.querySelectorAll('.post__button--delete');

  deleteButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      await deletePostById(event.target.dataset.id);

      renderAllPosts();
    });
  });
};

export const editPost = () => {
  const modalController = document.querySelector('.modal-edit__controller');
  const closeButton = document.querySelector('.close-button1');
  const input = document.querySelector('#input1');
  const textarea = document.querySelector('#content');
  const cancelButton = document.querySelector('.modal-cancel__button');
  const saveEditButton = document.querySelector('#publishBtn');

  saveEditButton.addEventListener('click', (event) => {
    event.preventDefault();
    const editBody = {};
    let count = 0;

    input.value.trim() === '' ? count++ : (editBody[input.name] = input.value);

    textarea.value.trim() === ''
      ? count++
      : (editBody[textarea.name] = textarea.value);

    if (count !== 0) {
      return alert('Por favor, preencha todos os campos necessários');
    } else {
      // editPost(editBody);
      console.log(editBody);
      input.value = '';
      textarea.value = '';

      modalController.close();
    }
  });

  cancelButton.addEventListener('click', () => {
    input.value = '';
    textarea.value = '';

    modalController.close();
  });

  closeButton.forEach((buttonClose) => {
    buttonClose.addEventListener('click', () => {
      modalController.close();
    });
  });
};

const main = () => {
  showUserMenu();

  renderAllPosts();
  setTimeout(() => {
    handleDeletePost();
    postEditModal();
  }, 1000);
};

main();
// editPost();
authentication();
createPost();
