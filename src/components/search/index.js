import React, { useRef } from 'react';

import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();
    // this is the query parameter we will want to add to the URL
    // this is an object where the key is the query parameter name (here - name) and value is query parameter value (what we type to the search bar)
    const searchQuery = {
      name: searchInputRef.current.value
    }

    // createSearchparams() will transform a query object into a URLSearchParams object
    // query will look like this: name=aria (or anything we type in to the search bar) so that the URL will look like: /search?name=aria
    const query = createSearchParams(searchQuery);

    // imperatively redirect with useNavigate() returned function
    navigate({
      pathname: '/search',
      search: `?${query}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
