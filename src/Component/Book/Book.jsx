import React from "react";

function Book({book, changeShelf}) {
  
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5">
        <div className="book h-100 d-flex flex-column align-items-center justify-content-center border rounded">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            ></div>

            <div className="book-shelf-changer">
              <select onChange={(e)=> changeShelf(book, e.target.value)} value={book.shelf ? book.shelf : 'none'}>
                <optgroup label="Move to...">
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="book-title text-center px-2">{book.title}</div>
          <div className="book-authors text-center">{book.authors && book.authors.map((author)=> <p key={author} className="mb-0">{author}</p>)}</div>
          <div className="book-title text-center px-2 text-danger">{book.shelf ? book.shelf : 'none'} </div>
          
        </div>
      </div>
    </>
  );
}

export default Book;
