import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";

export const PostList = ({
  totalPosts,
  pagination,
  index,
  handleClick,
  token,
}) => {
  return (
    <section className="timeline__posts">
      <ul>
        {totalPosts.length >= 1 &&
          totalPosts.map((post) => (
            <li key={post.entryId}>
              <PostCard post={post} token={token} />
            </li>
          ))}
      </ul>

      {pagination.page !== index?.lastPage && (
        <button onClick={handleClick}>See more results</button>
      )}
    </section>
  );
};
