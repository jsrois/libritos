import * as React from "react";
import {Book} from "../repository/Book";


export const Library = (props: {books: Array<Book>}): JSX.Element => {

    return <section>
        <ul>
            { props.books.map( (book: Book, i: number) => {
                console.log(`rendering book ${book.title} ${book.author}`)
                return <li key={i}>{book.title} by {book.author}</li>;
            })}
        </ul>
    </section>
};
