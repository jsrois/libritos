import * as React from 'react';
import {Book} from "./Book";
import {useInput} from "../hooks/useInput";
import {useState} from "react";
import {Redirect} from "react-router";

export const NewBookForm = (props: { addBook: (book: Book) => void }) => {

    const { value: title, bind: bindTitle } = useInput("");
    const { value: author, bind: bindAuthor } = useInput("");
    const [ redirect, setRedirect ] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addBook(new Book(title, author));
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/"/>
    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="new-book-name">Book Name</label>
        <input id="new-book-name" type="text" {...bindTitle} />
        <label htmlFor="new-book-author">Book Author</label>
        <input id="new-book-author" type="text" {...bindAuthor}/>
        <input type="submit"/>
    </form>;
}