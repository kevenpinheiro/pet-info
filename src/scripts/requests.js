import { toast } from './toast.js';

export const green = '#168821';
export const red = '#df1545';

const baseUrl = 'http://localhost:3333';

// função para armazenar o header das requisição.
const createHeaders = () => {
  const token = localStorage.getItem('@petinfo:token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  return headers;
};

// função de login
export const loginRequest = async (loginBody) => {
  const token = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(loginBody),
  }).then(async (response) => {
    const convert = await response.json();

    localStorage.setItem('@petinfo:token', convert.token);

    if (response.ok) {
      toast('login realizado com sucesso', green);
      getCurrentUserInfo();

      setTimeout(() => {
        location.replace('./src/pages/feed.html');
      }, 2000);

      return convert;
    } else {
      toast(convert.message, red);
    }
  });

  return token;
};

// função para criar um novo usuário.
export const createUsers = async (createBody) => {
  const userFetch = await fetch(`${baseUrl}/users/create`, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(createBody),
  }).then(async (res) => {
    const convert = await res.json();

    if (res.ok) {
      toast('Sua conta foi criada com sucesso!', green);

      setTimeout(() => {
        location.replace('../../index.html');
      }, 4000);

      return convert;
    } else {
      toast('Algo deu errado, por favor tente novamente', red);
    }

    return userFetch;
  });
};

// função para buscar os dados do usuário logado
export const getCurrentUserInfo = async () => {
  const request = await fetch(`${baseUrl}/users/profile`, {
    method: 'GET',
    headers: createHeaders(),
  });
  const user = await request.json();

  localStorage.setItem('@petinfo:user', JSON.stringify(user));

  return user;
};

// função que vai buscar todos os posts
export const getAllPosts = async () => {
  const request = await fetch(`${baseUrl}/posts`, {
    method: 'GET',
    headers: createHeaders(),
  });
  const posts = await request.json();
  return posts;
};

export const openPostById = async (postID) => {
  const postById = await fetch(`${baseUrl}/posts/${postID}`, {
    method: 'GET',
    headers: createHeaders(),
  }).then(async (res) => {
    const convert = await res.json();

    return convert;
  });
  return postById;
};

export const newPost = async (postBody) => {
  const userFetch = await fetch(`${baseUrl}/posts/create`, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(postBody),
  }).then(async (res) => {
    const convert = await res.json();

    if (res.ok) {
      renderAllPosts();
    }
    return convert;
  });
  return userFetch;
};

export const deletePostById = async (postId) => {
  const post = await fetch(`${baseUrl}/posts/${postId}`, {
    method: 'DELETE',
    headers: createHeaders(),
  }).then(async (res) => {
    const convert = await res.json();

    if (res.ok) {
      alert(convert.message, green);

      return convert;
    } else {
      alert(convert.message, red);
    }
  });
  return post;
};

export const editPost = async (editBody) => {
  const editPost = await fetch(`${baseUrl}/posts/${postId}`, {
    method: 'PATH',
    headers: createHeaders(),
  }).then(async (res) => {
    const convert = await res.json();

    if (res.ok) {
      renderAllPosts();

      return convert;
    } else {
      alert(convert.message, red);
    }
  });
  return editPost;
};
