import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ labelName, placeholder, handleChange }) => {
  return (
    <div className="form-control">
      <label htmlFor="search-box">{labelName}</label>
      <input
        type="search"
        name="search-box"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
