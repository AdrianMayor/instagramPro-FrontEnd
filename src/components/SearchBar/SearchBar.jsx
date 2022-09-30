import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const { keyword: keywordSearched } = useParams();

  useEffect(() => {
    if (keywordSearched === undefined) setKeyword("");
  }, [keywordSearched]);

  return (
    <form>
      <input
        type="text"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Seach the views! "
      ></input>
      <Link to={`/${keyword}`}>
        <button>Search</button>
      </Link>
    </form>
  );
};
