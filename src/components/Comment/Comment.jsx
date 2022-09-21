import SpinnerIcon from "../../assets/icons/loadingIcon.svg";
import { useGetUser } from "../../hooks/useGetUser";

export const Comment = ({ comment }) => {
  const { user, loading } = useGetUser({
    idUser: comment.commentUserId,
  });

  return !loading ? (
    <>
      <img
        src={`${process.env.REACT_APP_SERVER}/${user.avatar}`}
        alt={`${comment.username} comment`}
        className="postCard__commentBox--profilePic"
      ></img>
      <p>{comment.comment}</p>
    </>
  ) : (
    <img src={SpinnerIcon} alt="loadingIcon"></img>
  );
};
