import React, { useState } from "react";
import BookShelf from "../BookShelf/BookShelf";
import Header from "../Header/Header";
import MixBlendLoading from './../MixBlendLoading/MixBlendLoading';

function Home({books, changeShelf, isLoading}) {
  
  const [shelfHeaders, setShelfHeaders] = useState([
    {
      shelfTitle: "Currently Reading",
      shelfNote: "Books I am currently Reading",
      shelf: "currentlyReading",
    },
    {
      shelfTitle: "Want To Read",
      shelfNote: "Books I check and Want to Read",
      shelf: "wantToRead",
    },
    {
      shelfTitle: "Read",
      shelfNote: "Books I finished Reading it",
      shelf: "read",
    },
  ]);
  return (
    <>
      <Header />
      {isLoading ? (<MixBlendLoading />) : 
      (<section className="mt-5 pt-5">
        {shelfHeaders.map((shelfHeader) => (
          <BookShelf
            key={shelfHeader.shelfTitle}
            shelfTitle={shelfHeader.shelfTitle}
            shelfNote={shelfHeader.shelfNote}
            shelf={shelfHeader.shelf}
            books={books}
            changeShelf={changeShelf}
          />
        ))}
      </section>) } 
        

    </>
  );
}

export default Home;
