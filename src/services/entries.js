import axios from "axios";

export const newEntryService = async ({ entry }) => {
  try {
    const FormData = require("form-data");

    const post = new FormData();
    entry.description && post.append("description", entry.description);
    entry.images.length > 1 ??
      post.images.map((item, index) => post.append(`image-${index}`, item));

    const response = axios.post("/entries", post, {
      headers: post.getHeaders(),
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
