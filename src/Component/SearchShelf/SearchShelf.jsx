import React from 'react'
import Book from '../Book/Book'
import MixBlendLoading from './../MixBlendLoading/MixBlendLoading';
import Loader from './../DottedLoader/Loader';


function SearchShelf({ searchedBooks, changeShelf, isLoading}) {
  return (
    <>
    {isLoading ? (<Loader />) : (<div className="container my-3 rounded shelf-bg  bookShelf">
        <div className="shelf-item container">
          <div className="row g-3 justify-content-center">
            {searchedBooks.length > 0 ? (searchedBooks.map((book)=> <Book key={book.id} book={book} changeShelf={changeShelf}/>)) : (
              <div className="container vh-100 d-flex align-items-center justify-content-center">
                <h1>Please Search by title or Author</h1>
              </div>
            )}
              
          </div>
        </div>
      </div>)}
      
    </>
  )
}

export default SearchShelf