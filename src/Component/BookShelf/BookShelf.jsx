import React from 'react'
import Book from '../Book/Book'


function BookShelf({ shelfTitle, shelfNote, shelf, books, changeShelf}) {

  const bookCategory = books.filter((b)=> b.shelf === shelf);

  return (
    <>
      <div className="container my-5 rounded shelf-bg">
        <div className='shelf-heading border-bottom bookShelf'>
          <h3 className='mb-0'>{shelfTitle}</h3>
          <p className='mb-2 text-light'>{shelfNote}</p>
        </div>
        <div className="shelf-item container">
          <div className="row g-3 justify-content-center">
            {bookCategory && bookCategory.map((book)=> <Book key={book.id}  book={book} changeShelf={changeShelf}/>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookShelf