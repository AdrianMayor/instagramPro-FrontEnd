import { useState } from "react";
import SpinnerIcon from "../../assets/icons/loadingIcon.svg";
import Carousel, { CarouselItem } from "../Carousel/Carousel";

export const ImagesBox = ({ photos, entryOwnerUsername }) => {
  const [photoLoading, setPhotoLoading] = useState(true);
  const [count, setCount] = useState(0);

  return (
    photos.length >= 1 && (
      <Carousel>
        {photos.map((photo) => (
          <CarouselItem key={photo.imageId}>
            <img
              src={
                photoLoading
                  ? `${SpinnerIcon}`
                  : `${process.env.REACT_APP_SERVER}/${photo.imageName}`
              }
              alt={`Post from ${entryOwnerUsername}`}
              onLoad={() => {
                setPhotoLoading(false);
                setCount(count + 1);
              }}
            ></img>
          </CarouselItem>
        ))}
      </Carousel>
    )
  );
};
