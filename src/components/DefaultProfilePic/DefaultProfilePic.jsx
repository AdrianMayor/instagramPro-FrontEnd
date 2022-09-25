import DefaultPhoto from "../../assets/icons/Default_pfp.svg.png";

export const DefaultProfilePic = ({ userProfile }) => {
  return (
    <img
      src={DefaultPhoto}
      alt={`Avatar of ${userProfile}`}
      className="postCard__header--profilePic"
    ></img>
  );
};
