import { useEffect, useState } from "react";
import { services } from "../services";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState({ lastPage: 1 });
  const [keys, setKeys] = useState({ keyword: "", limit: 0, page: 0 });
  const [loadingData, setLoadingData] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoadingData(true);
        console.log(keys, index);
        let data;
        if (keys.page <= index.lastPage) {
          data = await services.entries.listEntries(keys);

          setPosts(data.data.entries);

          setIndex(data.data.index);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingData(false);
      }
    };
    if ((keys.page > 0 && keys.limit > 0) || keys.keyword !== "") {
      getPosts();
    }
  }, [keys]);

  const addPost = ({ data }) => {
    setPosts([...posts, data]);
  };

  return {
    posts,
    setPosts,
    index,
    setIndex,
    error,
    addPost,
    loadingData,
    setLoadingData,
    setKeys,
  };
};
