import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = ({ resetInput }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    /*     console.log(keyword);
    console.log(resetInput); */
    if (resetInput === undefined) setKeyword("");
  }, [resetInput]);

  return (
    <form>
      <input
        type="text"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      ></input>
      <Link to={`/${keyword}`}>
        {" "}
        <button>Search</button>
      </Link>
    </form>
  );
};
