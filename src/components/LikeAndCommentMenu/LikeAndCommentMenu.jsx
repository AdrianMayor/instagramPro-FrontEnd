export const LikeAndCommentMenu = ({ totalLikes, totalComments }) => {
  return (
    <menu className="postCard__likeAndCommentMenu">
      <li>
        <button>💓</button>
        <p className="postCard__totalLikes">Total Likes: {totalLikes}</p>
      </li>
      <li>
        <button>🗣️</button>
        <p className="postCard__totalComments">
          Total Comments: {totalComments}
        </p>
      </li>
    </menu>
  );
};
