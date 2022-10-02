import { useEffect, useState } from "react";
import { services } from "../../services";
import { Comment } from "../Comment/Comment";
import { SendCommentIcon } from "../SendCommentIcon/SendCommentIcon";
import "./CommentBox.css";

export const CommentBox = ({
  comments,
  idEntry,
  totalComments,
  singlePost,
  token,
}) => {
  const [postComments, setPostComments] = useState([]);
  const [commentIndex, setCommentIndex] = useState(null);

  useEffect(() => {
    singlePost ? handleClick() : setPostComments(comments);
  }, [comments, singlePost]);

  let limit;
  commentIndex === null ? (limit = 3) : (limit = 10);

  const handleClick = () => {
    const getComments = async () => {
      const data = await services.entries.viewEntryComments({
        idEntry,
        page: commentIndex,
        token,
      });
      postComments.length === 3 || !singlePost
        ? setPostComments(data.data.entryComments)
        : setPostComments([...postComments, ...data.data.entryComments]);

      setCommentIndex(data.data.index.nextPage);
    };
    getComments();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = { comment: e.target.elements.newComment.value };

    const data = await services.entries.sendCommentToEntry({
      comment: newComment,
      idEntry,
      token,
    });

    refreshComments({ limit });
    e.target.reset();
  };

  const refreshComments = async ({ limit }) => {
    const refreshComments = await services.entries.viewEntryComments({
      idEntry,
      limit,
      token,
    });

    setPostComments(refreshComments.data.entryComments);
    setCommentIndex(null);
  };

  return (
    <>
      {token && (
        <form onSubmit={handleSubmit} autoComplete="off">
          <textarea
            maxLength={150}
            data-limit-row-lent="true"
            rows={2}
            cols={40}
            type="text"
            name="newComment"
            placeholder="Share your thoughts"
            autoFocus
          />
          <button>
            <SendCommentIcon></SendCommentIcon>
          </button>
        </form>
      )}
      <ul className="postCard__commentBox--comments">
        {postComments.length >= 1 ? (
          postComments.map((comment) => (
            <li key={comment.commentId}>
              <Comment comment={comment} />
            </li>
          ))
        ) : (
          <li className="postCard__commentBox--noComments">No comments</li>
        )}
        {totalComments > 3 && (
          <li className="postCard__commentBox--moreButtons">
            {commentIndex !== "none" && (
              <button onClick={handleClick}>Show more</button>
            )}
            {postComments.length > 3 && (
              <button
                onClick={() => {
                  setPostComments(postComments.slice(0, 3));
                  setCommentIndex(null);
                }}
              >
                Close Comments
              </button>
            )}
          </li>
        )}
      </ul>
    </>
  );
};
