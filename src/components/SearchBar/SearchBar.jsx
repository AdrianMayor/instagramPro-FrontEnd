import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = ({ setTotalPosts }) => {
  const [keyword, setKeyword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.keyword.value;

    setKeyword(value);

    e.target.reset();
    console.log(keyword);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="keyword" onChange={handleChange}></input>
      <Link to={`/${keyword}`}>
        {" "}
        <button>Search</button>
      </Link>
    </form>
  );
};
