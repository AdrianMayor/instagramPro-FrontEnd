import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { services } from "../services";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState({ lastPage: 1 });
  const [keys, setKeys] = useState({ keyword: "", limit: 0, page: 0 });
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoadingData(true);

        let data;
        if (keys.page <= index.lastPage) {
          data = await services.entries.listEntries(keys, { token });

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

  return {
    posts,
    setPosts,
    index,
    setIndex,
    error,
    loadingData,
    setLoadingData,
    setKeys,
  };
};
