import React, { useState } from "react";

import "../../styles/SearchBar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false)

  const handleChange = (event) => {
    const value = event .target.value;
    setInputValue(value)
    setButtonVisible(value.lenth > 0)
  };

  const handleBlur = () => {
    if (inputValue.length === 0) {
      setButtonVisible(false)
    }
  }

  return (
    <container className='container-searchbar'>
    <form className="form-searchbar" >
    <input
        type="text"
        className="input-searchbar"
        placeholder="Comment puis-je vous aider ?"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        autofocus
        required
      />
      <button className="button-searchbar" type="submit">
      <span class="button-text">Go</span>
      </button>
    </form>
    </container>
  );
};

export default SearchBar;
