import DefaultProfilePic from "../../assets/icons/Default_pfp.svg.png";
import { useGetUser } from "../../hooks/useGetUser";

export const PostCardHeader = ({ userProfile, userProfileId }) => {
  const { loading, user } = useGetUser({ idUser: userProfileId });

  return (
    <>
      {!loading &&
        (user.avatar ? (
          <img
            src={`${process.env.REACT_APP_SERVER}/${user.avatar}`}
            alt={`Avatar of ${userProfile}`}
            className="postCard__header--profilePic"
          ></img>
        ) : (
          <img
            src={DefaultProfilePic}
            alt={`Avatar of ${userProfile}`}
            className="postCard__header--profilePic"
          ></img>
        ))}
      <p>Username: {userProfile}</p>
    </>
  );
};
