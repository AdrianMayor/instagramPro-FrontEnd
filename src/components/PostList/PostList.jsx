import SpinnerIcon from "../../assets/icons/loadingIcon.svg";
import { PostCard } from "../PostCard/PostCard";

export const PostList = ({ loading, posts }) => {
  return (
    <section>
      {loading === false ? (
        <ul>
          {posts.data.entries.map((post) => (
            <li key={post.entryId}>
              <PostCard post={post}></PostCard>
            </li>
          ))}
        </ul>
      ) : (
        <img src={SpinnerIcon} alt="loadingIcon"></img>
      )}
    </section>
  );
};
