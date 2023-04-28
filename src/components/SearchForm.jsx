import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        {/* not a controlled input as api has limited requests and if you calling api for each letter then its not a good ux. so wait untill user types query and click submit */}
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="nature"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
