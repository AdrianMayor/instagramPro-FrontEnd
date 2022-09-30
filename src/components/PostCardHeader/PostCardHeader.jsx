import { useGetUser } from "../../hooks/useGetUser";
import { DefaultProfilePic } from "../DefaultProfilePic/DefaultProfilePic";
import { Loading } from "../Loading/Loading";
import "./PostCardHeader.css";
export const PostCardHeader = ({
  userProfile,
  userProfileId,
  entryCreationDate,
}) => {
  const { loading, user } = useGetUser({ idUser: userProfileId });

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : user.avatar ? (
        <img
          src={`${process.env.REACT_APP_SERVER}/${user.avatar}`}
          alt={`Avatar of ${userProfile}`}
          className="postCard__header--profilePic"
        ></img>
      ) : (
        <DefaultProfilePic
          userProfile={userProfile}
          className="postCard__header--profilePic"
        />
      )}
      <p className="postCard__header--username">{userProfile}</p>
      <p className="postCard__header--creationDate">
        {new Date(entryCreationDate).toLocaleString()}{" "}
      </p>
    </>
  );
};
