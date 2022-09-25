import axios from "axios";

// Funcion destinada a crear una entrada

export const newEntry = async ({ post }) => {
  console.log(post);
  try {
    const FormData = require("form-data");

    const entry = new FormData();
    post.description && entry.append("description", post.description);
    post.images?.map((item, index) => entry.append(`image-${index}`, item));

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/entries`,
      entry,
      {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// Funcion destinada a enviar un comentario a una entrada

export const sendCommentToEntry = async ({ comment, idEntry }) => {
  console.log(comment);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/entries/${idEntry}/comment`,
      comment,
      {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// Funcion destinada a enviar un like a una entrada o retirarselo

export const likeAnEntry = async ({ idEntry }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/entries/${idEntry}/like`,
      "",

      {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// Funcion destinada a recuperar todas las entradas

export const listEntries = async ({ keyword, page, limit }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/entries?keyword=${
        keyword !== undefined ? `${keyword}` : ""
      }&page=${page !== undefined ? `${page}` : ""}&limit=${
        limit !== undefined ? `${limit}` : ""
      }`,
      {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

// Funcion destinada a recuperar una sola entrada

export const getSingleEntry = async ({ idEntry }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/entries/${idEntry}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

/* // Funcion destinada a recuperar las fotos del usuario logeado

export const getOwnPhotos = async ({ page, limit }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/entries/users?page=${
        page !== undefined ? `${page}` : ""
      }&limit=${limit !== undefined ? `${limit}` : ""}`,
      { headers: { Authorization: process.env.REACT_APP_TOKEN } }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}; */

// Funcion destinada a recuperar los comentarios de una entrada

export const viewEntryComments = async ({ idEntry, page, limit }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/entries/${idEntry}/comment?page=${
        page !== undefined ? `${page}` : ""
      }&limit=${limit !== undefined ? `${limit}` : ""}`
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};
