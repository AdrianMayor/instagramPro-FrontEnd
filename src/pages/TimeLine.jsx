import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewPostBox } from "../components/NewPostBox/NewPostBox";
import { PostList } from "../components/PostList/PostList";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { usePosts } from "../hooks/usePosts";

export const TimeLine = () => {
  const { keyword } = useParams();
  const [totalPosts, setTotalPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    keyword: "",
    limit: 10,
    page: 1,
  });

  const { posts, index, setKeys } = usePosts();

  useEffect(() => {
    if (keyword !== undefined) {
      setPagination({ ...pagination, ...{ keyword: keyword } });
      setTotalPosts([]);
    }
  }, [keyword]);

  useEffect(() => {
    setKeys(pagination);
  }, [pagination, setKeys]);

  useEffect(() => {
    setTotalPosts([...totalPosts, ...posts]);
    setLoading(false);
  }, [posts]);

  const handleClick = () => {
    setPagination({ ...pagination, ...{ page: pagination.page + 1 } });
  };

  return (
    <>
      <SearchBar setTotalPosts={setTotalPosts} />
      <NewPostBox totalPosts={totalPosts} setTotalPosts={setTotalPosts} />
      <PostList
        totalPosts={totalPosts}
        loading={loading}
        pagination={pagination}
        index={index}
        handleClick={handleClick}
      />
      ;
    </>
  );
};
