import { handleDate } from './render.js';

export const renderPostModal = (post) => {
  const modalController = document.querySelector('.modal-feed__controller');
  const modalContainer = document.createElement('div');
  const modalProfile = document.createElement('div');
  const modalAuthorImg = document.createElement('img');
  const modalAuthorName = document.createElement('h2');
  const divisor = document.createElement('small');
  const postDate = document.createElement('small');
  const modalPostTitle = document.createElement('h2');
  const modalPostContent = document.createElement('p');
  const modalCloseButton = document.createElement('button');

  modalController.classList.add('modal__controller');
  modalContainer.classList.add('modal__container');
  modalProfile.classList.add('modal-profile__container');
  modalAuthorImg.classList.add('post__author-image');
  modalAuthorName.classList.add('text4');
  modalAuthorName.classList.add('bolder');
  postDate.classList.add('post__date', 'text4');
  divisor.classList.add('post__date', 'text4');
  modalPostTitle.classList.add('post__title');
  modalPostTitle.classList.add('text1');
  modalPostTitle.classList.add('modal__title');
  modalPostContent.classList.add('post__content');
  modalPostContent.classList.add('modal__content');
  modalCloseButton.classList.add('close-button');

  modalAuthorImg.src = post.user.avatar;
  modalAuthorName.innerText = post.user.username;
  modalPostTitle.innerText = post.title;
  modalPostContent.innerText = post.content;
  divisor.innerText = '|';
  postDate.innerText = handleDate(post.created_at);
  modalCloseButton.innerText = 'X';

  modalCloseButton.addEventListener('click', () => {
    modalController.close();
  });

  modalProfile.append(modalAuthorImg, modalAuthorName, divisor, postDate);

  modalContainer.append(
    modalProfile,
    modalPostTitle,
    modalPostContent,
    modalCloseButton
  );
  modalController.appendChild(modalContainer);
};

const NewPostModal = () => {
  const modalController = document.querySelector('.modal-new-post__controller');
  const createModalButton = document.querySelector('#user__newpost');

  const modalContainer2 = document.createElement('div');
  const modalHeaderContainer = document.createElement('div');
  const modalHeaderTitle = document.createElement('h1');
  const modalTitleH2 = document.createElement('h2');
  const modalContentH2 = document.createElement('h2');
  const modalForm = document.createElement('form');
  const input1 = document.createElement('input');
  const textarea = document.createElement('textarea');
  const publishButton = document.createElement('button');
  const cancelButton = document.createElement('button');
  const closeButton = document.createElement('button');
  const divButtons = document.createElement('div');

  modalContainer2.classList.add('modal-create__container');
  modalHeaderContainer.classList.add('modal-create__header');
  modalHeaderTitle.classList.add('modal-create__title');
  modalTitleH2.classList.add('modal-create__h2');
  modalContentH2.classList.add('modal-create__h2');
  modalForm.classList.add('create-modal__form');
  input1.classList.add('create-modal__input1');
  textarea.classList.add('create-modal__textarea');
  divButtons.classList.add('modal-div__buttons');
  publishButton.classList.add('modal-publish__button');
  cancelButton.classList.add('modal-cancel__button');
  closeButton.classList.add('close-button1');

  modalHeaderTitle.innerText = 'Criando novo post';
  modalTitleH2.innerText = 'Titulo do post';
  modalContentH2.innerText = 'Conteúdo do post';
  publishButton.innerText = 'Publicar';
  cancelButton.innerText = 'Cancelar';
  closeButton.innerText = 'X';

  input1.type = 'text';
  input1.name = 'title';
  input1.id = 'input1';
  input1.placeholder = 'Digite aqui';
  textarea.id = 'content';
  textarea.name = 'content';
  textarea.placeholder = 'Digite aqui';
  publishButton.id = 'publishBtn';

  createModalButton.addEventListener('click', () => {
    modalController.showModal();
  });

  divButtons.append(publishButton, cancelButton);
  modalHeaderContainer.append(modalHeaderTitle, closeButton);
  modalForm.append(input1, textarea);
  modalContainer2.append(
    modalHeaderContainer,
    modalTitleH2,
    input1,
    modalContentH2,
    textarea,
    divButtons
  );
  modalController.appendChild(modalContainer2);
};

export const postEditModal = () => {
  const modalController = document.querySelector('.modal-edit__controller');
  const editModalButton = document.querySelectorAll('.post__button--edit');
  console.log(editModalButton);

  const modalContainerEdit = document.createElement('div');
  const modalEditHeaderContainer = document.createElement('div');
  const modalEditHeaderTitle = document.createElement('h1');
  const modalEditTitleH2 = document.createElement('h2');
  const modalEditContentH2 = document.createElement('h2');
  const modalEditForm = document.createElement('form');
  const inputEdit = document.createElement('input');
  const textareaEdit = document.createElement('textarea');
  const saveEditButton = document.createElement('button');
  const cancelEditButton = document.createElement('button');
  const closeButton = document.createElement('button');
  const divEditButtons = document.createElement('div');

  modalContainerEdit.classList.add('modal-create__container');
  modalEditHeaderContainer.classList.add('modal-create__header');
  modalEditHeaderTitle.classList.add('modal-create__title');
  modalEditTitleH2.classList.add('modal-create__h2');
  modalEditContentH2.classList.add('modal-create__h2');
  modalEditForm.classList.add('create-modal__form');
  inputEdit.classList.add('create-modal__input1');
  textareaEdit.classList.add('create-modal__textarea');
  divEditButtons.classList.add('modal-div__buttons');
  saveEditButton.classList.add('modal-publish__button');
  cancelEditButton.classList.add('modal-cancel__button');
  closeButton.classList.add('close-button1');

  modalEditHeaderTitle.innerText = 'Edição';
  modalEditTitleH2.innerText = 'Titulo do post';
  modalEditContentH2.innerText = 'Conteúdo do post';
  saveEditButton.innerText = 'Salvar alterações';
  cancelEditButton.innerText = 'Cancelar';
  closeButton.innerText = 'X';

  inputEdit.type = 'text';
  inputEdit.name = 'title';
  inputEdit.id = 'input1';
  inputEdit.placeholder = 'Digite aqui';
  textareaEdit.id = 'content';
  textareaEdit.name = 'content';
  textareaEdit.placeholder = 'Digite aqui';
  editModalButton.id = 'saveEditBtn';

  divEditButtons.append(saveEditButton, cancelEditButton);
  modalEditHeaderContainer.append(modalEditHeaderTitle, closeButton);
  modalEditForm.append(inputEdit, textareaEdit);
  modalContainerEdit.append(
    modalEditHeaderContainer,
    modalEditTitleH2,
    inputEdit,
    modalEditContentH2,
    textareaEdit,
    divEditButtons
  );
  modalController.appendChild(modalContainerEdit);

  editModalButton.forEach((editButton) => {
    editButton.addEventListener('click', () => {
      console.log(editButton);
      // modalController.showModal();
    });
  });
};

export const closeModal = () => {
  const modalController = document.querySelector('.modal-new-post__controller');
  const closeButton = document.querySelector('.close-button1');
  const input = document.querySelector('#input1');
  const textarea = document.querySelector('#content');

  closeButton.addEventListener('click', () => {
    input.value = '';
    textarea.value = '';

    modalController.close();
  });
};

NewPostModal();
closeModal();
