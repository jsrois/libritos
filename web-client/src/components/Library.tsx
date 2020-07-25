import * as React from "react";
import {Book} from "../repository/Book";


export const Library = (props: { books: Array<Book> }): JSX.Element => {

    return <section>
        <div className="BookList">
            {props.books.map(book =>
                <div className="BookItem">
                    <div className="BookItem__cover"></div>
                    <div className="BookItem__title">{book.title}</div>
                    <div className="BookItem__author">{book.author}</div>
                </div>)}
        </div>
    </section>
};
