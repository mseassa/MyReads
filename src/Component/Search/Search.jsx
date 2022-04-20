import React from "react";
import SearchShelf from "../SearchShelf/SearchShelf";
import { Link } from 'react-router-dom';

function Search({handleBooksSearch, searchedBooks, changeShelf, resetSearchedBooks, handleSearch, isLoading}) {
  return (
    <>
      <div className="container">
        <div className="search-header border-bottom d-flex align-items-center py-4">
          <input
            onChange={(e)=>handleBooksSearch(e.target.value)}
            // (e)=>handleSearchBook(e.target.value)
            type="text"
            className="modal-title form-control form-control-lg w-75 m-auto"
            placeholder="Search a new book"
            id="staticBackdropLabel"
          />
          <Link to='/'>
          <button
          onClick={resetSearchedBooks}
            type="button"
            className="btn-close btn-outline-danger bg-danger"
          ></button>
          </Link>
        </div>
      </div>
      <div className="">
        <SearchShelf searchedBooks={searchedBooks} changeShelf={changeShelf} isLoading={isLoading}/>
      </div>
    </>
  );
}

export default Search;

