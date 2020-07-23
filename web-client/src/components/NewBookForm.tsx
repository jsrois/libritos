import * as React from 'react';
import {useState} from "react";
import {Book} from "./Book";

export const NewBookForm = (props: { addBook: (book: Book) => void } ) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addBook(new Book(title, author));
    };

    return <form onSubmit={onSubmit}>
        <label htmlFor="new-book-name">Book Name</label>
        <input id="new-book-name" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <label htmlFor="new-book-author">Book Author</label>
        <input id="new-book-author" type="text" value={author} onChange={(event) => setAuthor(event.target.value)}/>
        <input type="submit" />
    </form>
}