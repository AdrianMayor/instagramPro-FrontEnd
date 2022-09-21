import { useParams } from "react-router-dom";
import {
  getOwnPhotos,
  getSingleEntry,
  likeAnEntry,
  listEntries,
  newEntryService,
  sendCommentToEntry,
  viewEntryComments,
} from "../../services/entries";

export const NewEntry = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const description = e.target.elements.description.value;

    const imageA = e.target.elements.imageA.files[0];
    const imageB = e.target.elements.imageB.files[0];
    const imageC = e.target.elements.imageC.files[0];
    const imageD = e.target.elements.imageD.files[0];

    let post = {};

    if (description) {
      post = { description };
    }
    if (imageA) post = { ...post, images: [imageA] };
    if (imageB) post = { ...post, images: [...post.images, imageB] };
    if (imageC) post = { ...post, images: [...post.images, imageC] };
    if (imageD) post = { ...post, images: [...post.images, imageD] };

    const sendPost = async () => {
      const response = await newEntryService({ post });
      console.log(response);
    };
    sendPost();

    e.target.reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" placeholder="description" name="description"></input>
      <input type="file" name="imageA"></input>
      <input type="file" name="imageB"></input>
      <input type="file" name="imageC"></input>
      <input type="file" name="imageD"></input>
      <button>Send</button>
    </form>
  );
};

export const CommentBox = () => {
  const { idEntry = 1 } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = { comment: e.target.elements.commentText.value };

    const sendComment = async () => {
      const response = await sendCommentToEntry({ comment, idEntry });
      console.log(response);
    };
    sendComment();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="commentText"
        placeholder="Introduce your comment"
      ></input>
      <button>Send</button>
    </form>
  );
};

export const LikeButton = () => {
  const { idEntry = 1 } = useParams();
  const handleClick = () => {
    const sendLike = async () => {
      const response = await likeAnEntry({ idEntry });
      console.log(response);
    };
    sendLike();
  };
  return <button onClick={handleClick}>💓</button>;
};

export const LoadEntries = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const keyword = e.target.elements.keyword.value;
    let page;
    let limit;
    const getEntries = async () => {
      const response = await listEntries({ keyword, page, limit });

      console.log(response);
    };
    getEntries();
  };
  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Introduce what you want to search"
        name="keyword"
      ></input>
      <button>List entries</button>
    </form>
  );
};

export const SingleEntry = () => {
  const { idEntry = 1 } = useParams;

  const handleClick = () => {
    const getEntry = async () => {
      const response = await getSingleEntry({ idEntry });
      console.log(response);
    };
    getEntry();
  };
  return <button onClick={handleClick}>get single</button>;
};

export const OwnPhotos = () => {
  let page;
  let limit;
  const handleClick = () => {
    const getPhotos = async () => {
      const response = await getOwnPhotos({ page, limit });
      console.log(response);
    };
    getPhotos();
  };
  return <button onClick={handleClick}>get own fotos</button>;
};

export const EntryComments = () => {
  const { idEntry = 1 } = useParams;
  let page;
  const handleClick = () => {
    const getComments = async () => {
      const response = await viewEntryComments({ idEntry, page });
      console.log(response);
    };
    getComments();
  };
  return <button onClick={handleClick}>ver commentarios</button>;
};
