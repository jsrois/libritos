import * as React from 'react';
import {Book} from "../repository/Book";
import {useInput} from "../hooks/useInput";
import {useState} from "react";
import {Redirect} from "react-router";

export const NewBookForm = (props: { addBook: (book: Book) => void }) => {

    const { value: title, bind: bindTitle } = useInput("");
    const { value: author, bind: bindAuthor } = useInput("");
    const [ redirect, setRedirect ] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addBook({title, author});
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/"/>
    }

    return <form className="Form" onSubmit={onSubmit}>
        <label className="Form__label" htmlFor="new-book-name">Book Name</label>
        <input className="Form__textBox" id="new-book-name" type="text" {...bindTitle} />
        <label className="Form__label" htmlFor="new-book-author">Book Author</label>
        <input className="Form__textBox" id="new-book-author" type="text" {...bindAuthor}/>
        <div className="Form__check">
            <input type="checkbox"/>
            <label htmlFor="new-book-read">Already Read</label>
        </div>
        <input className="Form__submitButton" type="submit" value="Add Book"/>

    </form>;
}