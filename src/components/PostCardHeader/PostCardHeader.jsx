import { useGetUser } from "../../hooks/useGetUser";
import { DefaultProfilePic } from "../DefaultProfilePic/DefaultProfilePic";

export const PostCardHeader = ({
  userProfile,
  userProfileId,
  entryCreationDate,
}) => {
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
          <DefaultProfilePic userProfile={userProfile} />
        ))}
      <p>Username: {userProfile}</p>
      <p>{new Date(entryCreationDate).toLocaleString()}</p>
    </>
  );
};
