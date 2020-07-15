import * as React from 'react';
import {useState} from "react";

export const App = (): JSX.Element => {


    const [books, setBooks] = useState(Array<String>());

    const [newBookTitle, setNewBookTitle] = useState("");

    const addNewBook = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBooks([...books, newBookTitle]);
        setNewBookTitle("");
    }

    const updateBookTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewBookTitle(event.target.value);
    }

    const removeBook = (i: number) => () => {
        setBooks(books.filter( (_, index) => index != i ));
    }

    return (
        <div>
            <h1 id="page-title">Libritos</h1>
            {
                books.map((book, key) =>
                    <div key={key}>
                        <span>{book}</span>
                        <div onClick={removeBook(key)} >Remove</div>
                    </div>)
            }

            <form onSubmit={addNewBook}>
                <label>
                    Book Title
                    <input type="text" value={newBookTitle} onChange={updateBookTitle}/>
                </label>
                <input type="submit" value="Add new book"/>
            </form>
        </div>);
}


