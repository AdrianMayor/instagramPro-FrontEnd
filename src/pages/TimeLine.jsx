import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { NewPostBox } from "../components/NewPostBox/NewPostBox";
import { PostList } from "../components/PostList/PostList";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { AuthContext } from "../context/authContext";
import { usePosts } from "../hooks/usePosts";

export const TimeLine = () => {
  const { token } = useContext(AuthContext);
  const { keyword } = useParams();
  const { posts, index, setKeys, isLoading } = usePosts();
  const [totalPosts, setTotalPosts] = useState([]);
  const [pagination, setPagination] = useState({
    keyword: "",
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    if (keyword !== undefined) {
      setPagination({ ...pagination, ...{ keyword: keyword } });
      setTotalPosts([]);
    } else if (keyword === undefined && pagination.keyword !== "") {
      setPagination({ ...pagination, ...{ keyword: "" } });
      setTotalPosts([]);
    }
  }, [keyword]);

  useEffect(() => {
    setKeys(pagination);
  }, [pagination]);

  useEffect(() => {
    setTotalPosts([...totalPosts, ...posts]);
  }, [posts]);

  const handleClick = () => {
    setPagination({ ...pagination, ...{ page: pagination.page + 1 } });
  };

  return (
    <>
      <SearchBar />
      {token && (
        <NewPostBox
          totalPosts={totalPosts}
          setTotalPosts={setTotalPosts}
          token={token}
        />
      )}

      <PostList
        totalPosts={totalPosts}
        pagination={pagination}
        index={index}
        handleClick={handleClick}
        token={token}
      />
      {isLoading && <Loading></Loading>}
    </>
  );
};
