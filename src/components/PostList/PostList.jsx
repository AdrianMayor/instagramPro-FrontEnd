import { Loading } from "../Loading/Loading";
import { PostCard } from "../PostCard/PostCard";

export const PostList = ({
  totalPosts,
  loading,
  pagination,
  index,
  handleClick,
}) => {
  return (
    <section>
      {loading === false ? (
        <>
          <ul>
            {totalPosts.length >= 1 &&
              totalPosts.map((post) => (
                <li key={post.entryId}>
                  <PostCard post={post} />
                </li>
              ))}
          </ul>
          {pagination.page !== index?.lastPage && (
            <button onClick={handleClick}>See more results</button>
          )}
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};
