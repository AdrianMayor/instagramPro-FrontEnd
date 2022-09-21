import { Comment } from "../Comment/Comment";

export const CommentBox = ({ comments }) => {
  return (
    <ul className="postCard__commentBox">
      {comments.length >= 1 ? (
        comments.map((comment) => (
          <li key={comment.commentId}>
            <Comment comment={comment}></Comment>
          </li>
        ))
      ) : (
        <li>No comments</li>
      )}
    </ul>
  );
};
