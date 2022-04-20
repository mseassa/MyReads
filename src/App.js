import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import axios from "axios";
import NotFound from "./Component/NotFound/NotFound";
import Loader from "./Component/DottedLoader/Loader";
import MixBlendLoading from "./Component/MixBlendLoading/MixBlendLoading";

function App() {
const api = "https://reactnd-books-api.udacity.com";
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    Accept: "application/json",
    Authorization: token,
};
// State
const [books, setBooks] = useState([]);
const [searchedBooks, setSearchedBooks] = useState([]);
const [query, setQuery] = useState("");
const [isLoading, setIsLoading] = useState(false)

// To get all Books
async function getAllBooks() {
    setIsLoading(true)
    let { data, status } = await axios.get(`${api}/books`, { headers });
    if (status == 200) {
        setBooks(data.books);
        setIsLoading(false)
    }
    console.log(data);
}
useEffect(() => {
    getAllBooks();
}, []);

// To ChangeShelf

async function changeShelf(book, shelf) {
    let { data } = await axios({
    url: `${api}/books/${book.id}`,
    method: "put",
    headers: {
        ...headers,
        "Content-Type": "application/json",
    },
    data: JSON.stringify({ shelf }),
    });
    getAllBooks();
    handleBooksSearch(query);
}
// To Search a new books
let cancelToken;
async function handleBooksSearch(query) {
    if (cancelToken) {
        setIsLoading(true)
    cancelToken.cancel("operation canceled due to new request");
    }
    cancelToken = axios.CancelToken.source();
    try {
    if (query) {
        let { data, status } = await axios({
        url: `${api}/search/`,
        method: "post",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        cancelToken: cancelToken.token,
        data: JSON.stringify({ query }),
        });
        if (status == 200) {
            setIsLoading(false)
        }
        if (!data.error) {
        setSearchedBooks(
            data.books.map((searchedBook) => {
            books.forEach((book) => {
                if (searchedBook.id === book.id) {
                searchedBook.shelf = book.shelf;
                }
            });
            return searchedBook;
            })
        );
        setQuery(query);
        console.log(data);
        } else {
        setSearchedBooks([]);
        }
    } else {
        setSearchedBooks([]);
    }
    } catch (error) {
    console.log(error);
    }
}

// resetSearchedBooks
function resetSearchedBooks() {
    setSearchedBooks([]);
}

return (
    <>
    <Routes>
        <Route
        path="/search"
        element={
            <Search
            handleBooksSearch={handleBooksSearch}
            searchedBooks={searchedBooks}
            changeShelf={changeShelf}
            resetSearchedBooks={resetSearchedBooks}
            isLoading={isLoading}
            />
        }
        ></Route>
        <Route
        path="/"
        element={<Home books={books} changeShelf={changeShelf} isLoading={isLoading}/>}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
        {/* <Loader /> */}
        
    </>
);
}

export default App;
