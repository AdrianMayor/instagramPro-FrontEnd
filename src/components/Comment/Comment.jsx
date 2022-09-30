import { useGetUser } from "../../hooks/useGetUser";
import { Loading } from "../Loading/Loading";
import "./Comment.css";
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
      <div className="postCard__commentBox--textBox">
        <p className="postCard__commentBox--userName">{comment.username}</p>
        <p className="postCard__commentBox--date">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
        <p className="postCard__commentBox--comment">{comment.comment}</p>
      </div>
    </>
  ) : (
    <Loading />
  );
};
