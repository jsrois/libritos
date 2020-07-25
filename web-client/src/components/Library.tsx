import * as React from "react";
import {Book} from "../repository/Book";


export const Library = (props: { books: Array<Book> }): JSX.Element => {

    return <section>
        <div className="BookList">
            {props.books.map(book =>
                <div className={book.alreadyRead ? "BookItem" : "BookItem BookItem--unread"}>
                    <div className="BookItem__cover">
                        <picture>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Black_open_book.png" />
                        </picture>
                    </div>
                    <div className="BookItem__title">{book.title}</div>
                    <div className="BookItem__author">{book.author}</div>
                </div>)}
        </div>
    </section>
};
