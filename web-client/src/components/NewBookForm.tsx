import * as React from 'react';
import {Book} from "../repository/Book";
import {useInput} from "../hooks/useInput";
import {useEffect, useState} from "react";
import {Redirect} from "react-router";

export const NewBookForm = (props: { addBook: (book: Book) => void }) => {
    const {value: title, bind: bindTitle} = useInput("");
    const {value: author, bind: bindAuthor} = useInput("");
    const {value: imageUrl, bind: bindImageUrl} = useInput("");

    const [alreadyRead, setAlreadyRead] = useState(true);
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addBook({title, author, alreadyRead, imageUrl});
        setRedirect(true);
    };

    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        setDisabled(title == "" || author == "")
    }, [title, author]);


    if (redirect) {
        return <Redirect to="/"/>
    }

    return <form className="Form" onSubmit={onSubmit}>
        <label className="Form__label" htmlFor="new-book-name">Book Name</label>
        <input className={"Form__textBox"} id="new-book-name" type="text" {...bindTitle} />
        <label className="Form__label" htmlFor="new-book-author">Book Author</label>
        <input className="Form__textBox" id="new-book-author" type="text" {...bindAuthor}/>
        <label className="Form__label" htmlFor="new-book-image-url">Image Url</label>
        <input className="Form__textBox" id="new-book-image-url" type="text" {...bindImageUrl}/>
        <div className="Form__check">
            <input type="checkbox" checked={alreadyRead}
                   onChange={ e => setAlreadyRead(e.target.checked)}/>
            <label htmlFor="new-book-read">Already Read</label>
        </div>
        <input disabled={disabled} className="Form__submitButton" type="submit" value="Add Book"/>

    </form>;
}