export const ImagesBox = ({ photos, entryOwnerUsername }) => {
  return (
    <ul>
      {photos.length >= 1 &&
        photos.map((photo) => (
          <li key={photo.imageId}>
            <img
              src={`${process.env.REACT_APP_SERVER}/${photo.imageName}`}
              alt={`Post from ${entryOwnerUsername}`}
            ></img>
          </li>
        ))}
    </ul>
  );
};
