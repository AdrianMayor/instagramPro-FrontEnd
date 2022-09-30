import { useState } from "react";
import { services } from "../../services";

export const NewPostBox = ({ totalPosts, setTotalPosts, token }) => {
  const [images, setImages] = useState([]);

  console.log();
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

  const handleClearClick = (e) => {
    e.nativeEvent.path[1].reset();
    setImages([]);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="file"
          name="imageA"
          style={{ display: images.length >= 1 && "none" }}
          onChange={(event) => handleOnChange({ value: event.target.files[0] })}
        />
        {images.length >= 1 && (
          <div>
            <img
              src={URL.createObjectURL(images[0])}
              alt="sdf"
              height="50px"
            ></img>
          </div>
        )}

        {images.length >= 1 && (
          <input
            type="file"
            name="imageB"
            style={{ display: images.length >= 2 && "none" }}
            onChange={(event) =>
              handleOnChange({ value: event.target.files[0] })
            }
          />
        )}
        {images.length >= 2 && (
          <div>
            <img
              src={URL.createObjectURL(images[1])}
              alt="sdf"
              height="50px"
            ></img>
          </div>
        )}

        {images.length >= 2 && (
          <input
            type="file"
            namne="imageC"
            style={{ display: images.length >= 3 && "none" }}
            onChange={(event) =>
              handleOnChange({ value: event.target.files[0] })
            }
          />
        )}
        {images.length >= 3 && (
          <div>
            <img
              src={URL.createObjectURL(images[2])}
              alt="sdf"
              height="50px"
            ></img>
          </div>
        )}
        {images.length >= 3 && (
          <input
            type="file"
            name="imageD"
            style={{ display: images.length >= 4 && "none" }}
            onChange={(event) =>
              handleOnChange({ value: event.target.files[0] })
            }
          />
        )}

        {images.length >= 4 && (
          <div>
            <img
              src={URL.createObjectURL(images[3])}
              alt="sdf"
              height="50px"
            ></img>
          </div>
        )}

        {images.length >= 1 && (
          <button onClick={(e) => handleClearClick(e)}>Clear photos</button>
        )}
        <span>{images.length}/4</span>
        <textarea
          maxLength={150}
          data-limit-row-lent="true"
          rows={5}
          name="description"
          placeholder="Add words to your views!"
        />
        <button>Send</button>
      </form>
    </section>
  );
};
