import React, { useState } from 'react';

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = evt => setText(evt.target.value);

  return (
    <div className="search-container">
      <form className="search" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Jobs..."
          value={text}
          onChange={onChange}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
