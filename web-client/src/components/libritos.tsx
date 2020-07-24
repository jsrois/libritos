import * as React from 'react';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Library} from "./Library";
import {Login} from "./Login";
import {NavigationMenu} from "./NavigationMenu";
import {NewBookForm} from "./NewBookForm";
import {Book} from "../repository/Book";
import axios, {AxiosError} from 'axios';

const phonyApi = {
    getBooks: (): Promise<Array<Book>> => axios.get<Array<Book>>("/books")
        .then(response =>
            response.data
        ).catch((error: AxiosError) => {
            throw error;
        }),

    addBook: (book:Book) => {
        return axios.post<Book>("/books", book)
    }
}

export const App = (): JSX.Element => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [books, setBooks] = useState(Array<Book>());
    const [updateRequired, setUpdateRequired] = useState(true)

    useEffect(() => {
        if (updateRequired) {
            setUpdateRequired(false);
            const updateBooksFromApi = async () => {
                const books: Array<Book> = await phonyApi.getBooks();
                setBooks(books)
            };
            updateBooksFromApi();
        }
    }, [updateRequired])


    const addNewBook = async (book: Book) => {
        await phonyApi.addBook(book)
        setUpdateRequired(true);
    };


    return <div>
        <Router>
            <NavigationMenu loggedIn={loggedIn}/>
            <Switch>
                <Route exact path="/">
                    <Library books={books}/>
                </Route>
                <Route path="/login">
                    <Login required={!loggedIn} onCompleteLogin={() => setLoggedIn(true)}></Login>
                </Route>
                <Route path="/new">
                    <NewBookForm addBook={addNewBook}/>
                </Route>
            </Switch>
        </Router>
    </div>;
};


