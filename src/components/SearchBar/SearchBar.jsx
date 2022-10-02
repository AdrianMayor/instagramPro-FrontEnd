import './SearchBar.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import searchicon from '../../assets/icons/search-icon.png'

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const { keyword: keywordSearched } = useParams();

  useEffect(() => {
    if (keywordSearched === undefined) setKeyword("");
  }, [keywordSearched]);

  return (
    <form className="searcher">
      <input
        type="text"
        name="keyword"
        className="searcher-term"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Seach the views! "
      ></input>
      <Link to={`/${keyword}`}>
        <button className="searcher-button">
          <img className='searcher-icon' src={searchicon} alt='serarch-icon'></img>
        </button>
      </Link>
    </form>
  );
};
