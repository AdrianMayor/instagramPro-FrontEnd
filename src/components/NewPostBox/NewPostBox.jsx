import { useState } from "react";
import { services } from "../../services";

export const NewPostBox = ({ totalPosts, setTotalPosts, token }) => {
  const [images, setImages] = useState([]);

  const handleOnChange = ({ value }) => {
    setImages([...images, value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const description = e.target.elements.description.value;

      let post = {};

      if (images.length < 1) throw new Error("Must exist at least one photo");

      if (description) {
        post = { description };
      }
      post = { ...post, images };

      const sendPost = async () => {
        const response = await services.entries.newEntry({ post, token });
        setTotalPosts([response.data.data.entry, ...totalPosts]);

        setImages([]);
      };
      sendPost();

      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="file"
        name="imageA"
        disabled={images.length >= 1}
        onChange={(event) => handleOnChange({ value: event.target.files[0] })}
      />{" "}
      {images.length >= 1 && (
        <input
          type="file"
          name="imageB"
          disabled={images.length >= 2}
          onChange={(event) => handleOnChange({ value: event.target.files[0] })}
        />
      )}
      {images.length >= 2 && (
        <input
          type="file"
          namne="imageC"
          disabled={images.length >= 3}
          onChange={(event) => handleOnChange({ value: event.target.files[0] })}
        />
      )}
      {images.length >= 3 && (
        <input
          type="file"
          name="imageD"
          disabled={images.length >= 4}
          onChange={(event) => handleOnChange({ value: event.target.files[0] })}
        />
      )}
      {images.length > 1 && (
        <button onClick={() => setImages([])}>Clear photos</button>
      )}
      <input type="text" name="description" />
      <button>Send</button>
    </form>
  );
};
