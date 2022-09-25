import { useEffect, useState } from "react";
import { services } from "../../services";

export const LikeAndCommentMenu = ({
  totalLikes,
  totalComments,
  idEntry,
  likedByMe,
}) => {
  const [liked, setLiked] = useState(undefined);
  const handleLikeButton = async () => {
    const { data } = await services.entries.likeAnEntry({ idEntry });

    data.message === "Disliked" ? setLiked(false) : setLiked(true);
  };

  useEffect(() => {
    likedByMe === 1 ? setLiked(true) : setLiked(false);
  }, [likedByMe]);

  return (
    <menu className="postCard__likeAndCommentMenu">
      <li>
        {liked !== undefined && (
          <button
            onClick={handleLikeButton}
            style={liked ? { background: "red" } : { background: "none" }}
          >
            💓
          </button>
        )}
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
