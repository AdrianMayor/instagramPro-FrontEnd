import { PostList } from "../components/PostList/PostList";
import { usePosts } from "../hooks/usePosts";
export const TimeLine = () => {
  const { posts, loading } = usePosts();
  return <PostList posts={posts} loading={loading}></PostList>;
};
