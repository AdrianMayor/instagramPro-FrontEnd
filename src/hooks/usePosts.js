import { useEffect, useState } from "react";
import { services } from "../services";

export const usePosts = ({ keyword, page, limit } = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = await services.entries.listEntries({
          keyword,
          page,
          limit,
        });
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [keyword, page, limit]);

  const addPost = ({ data }) => {
    setPosts(data, ...posts);
  };

  return { posts, loading, error, addPost };
};
