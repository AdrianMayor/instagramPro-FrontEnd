import { CommentBox } from "../CommentBox/CommentBox";
import { ImagesBox } from "../ImagesBox/ImagesBox";
import { LikeAndCommentMenu } from "../LikeAndCommentMenu/LikeAndCommentMenu";
import { PostCardHeader } from "../PostCardHeader/PostCardHeader";

export const PostCard = ({ post }) => {
  return (
    <article className="postCard">
      <header className="postCard__header">
        <PostCardHeader
          userProfile={post.entryOwnerUsername}
          userProfileId={post.entryOwnerId}
        ></PostCardHeader>
      </header>

      <div className="postCard__mainContent">
        <div className="postCard__images">
          <ImagesBox
            photos={post.photos}
            entryOwnerUsername={post.entryOwnerUsername}
          ></ImagesBox>
        </div>

        {post.entryDescription && (
          <p className="postCard__description">{post.entryDescription}</p>
        )}

        <LikeAndCommentMenu
          totalLikes={post.totalLikes}
          totalComments={post.totalComments}
        ></LikeAndCommentMenu>
      </div>

      <footer className="postCard__commentBox">
        <CommentBox comments={post.comments}></CommentBox>
      </footer>
    </article>
  );
};
