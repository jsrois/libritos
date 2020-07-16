import * as React from 'react';
import {useEffect, useState} from 'react';
import {BookRepository} from "../repos/BookRepository";


interface Book {
    title: string;
}

type BookList = Array<Book>

export const App = (props: {bookRepository: BookRepository}): JSX.Element => {

    const [errors, setErrors] = useState(Array<String>());

    const [books, setBooks] = useState(Array<String>());

    useEffect(() => {
        props.bookRepository.getAllBooks()
            .then((books: BookList) =>
                setBooks(books.map(book => book.title))
            )
            .catch(
                () => setErrors([...errors,"Unable to load books"])
            )
    }, [])

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
        setBooks(books.filter((_, index) => index != i));
    }

    return (
        <div>
            { errors.map( error => <div> Error: {error} </div>)}
            <h1 id="page-title">Libritos</h1>
            <div className="book-list">
                {
                    books.map((book, key) =>
                        <div className="book" key={key}>
                            <span className="book__title">{book}</span>
                            <div onClick={removeBook(key)}>Remove</div>
                        </div>)
                }
            </div>

            <form onSubmit={addNewBook}>
                <label>
                    Book Title
                    <input className="bookTitle" type="text" value={newBookTitle} onChange={updateBookTitle}/>
                </label>
                <input className="submitNewBook" type="submit" value="Add new book"/>
            </form>
        </div>);
}


