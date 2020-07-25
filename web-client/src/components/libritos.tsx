import * as React from 'react';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Library} from "./Library";
import {Login} from "./Login";
import {NavigationMenu} from "./NavigationMenu";
import {NewBookForm} from "./NewBookForm";
import {Book} from "../repository/Book";
import {BookRepository} from "../repository/BookRepository";
import {AuthenticationService} from "../authentication/AuthenticationService";


export const App = (): JSX.Element => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [books, setBooks] = useState(Array<Book>());
    const [updateRequired, setUpdateRequired] = useState(true)

    useEffect(() => {
        if (updateRequired) {
            setUpdateRequired(false);
            const updateBooksFromApi = async () => {
                const books: Array<Book> = await BookRepository.getBooks();
                setBooks(books)
            };
            updateBooksFromApi();
        }
    }, [updateRequired])


    const addNewBook = async (book: Book) => {
        await BookRepository.addBook(book)
        setUpdateRequired(true);
    };

    const authenticate = async (user: string, password: string) => {
        if (await AuthenticationService.authenticate(user, password)) {
            setLoggedIn(true);
        } else {
            console.log(`Unable to authenticate user [${user}].`);
        }
    };


    return <div>
        <Router>
            <NavigationMenu loggedIn={loggedIn}/>
            <Switch>
                <Route exact path="/">
                    <Library books={books}/>
                </Route>
                <Route path="/login">
                    <Login required={!loggedIn} onCompleteLogin={authenticate}></Login>
                </Route>
                <Route path="/new">
                    <NewBookForm addBook={addNewBook}/>
                </Route>
            </Switch>
        </Router>
    </div>;
};


