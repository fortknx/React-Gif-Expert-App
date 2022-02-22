import React from "react";
import { useState } from "react";
import { GifExpertApp } from "../GifExpertApp";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //
  const [inputValue, setInputValue] = useState('');
  //
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
    // console.log("Done");

    // console.log(cats);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{inputValue}</h1> */}
      <h2>Add Category</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};


AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired,
  };