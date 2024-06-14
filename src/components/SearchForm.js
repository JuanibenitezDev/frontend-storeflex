import React, { useState } from "react";
import "../style/SearchForm.css";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchForm() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      navigate("/catalogue");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchContainer">
      <input
        onChange={handleSearchInput}
        className="searchInput"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="searchIcon">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchForm;
