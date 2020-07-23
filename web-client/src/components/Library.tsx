import * as React from "react";
import {useEffect, useState} from "react";
import {Book} from "./Book";

const phonyApi = {
    getBooks: (): Promise<Array<Book>> => Promise.resolve([
        new Book("Das Kapital", "Karl Marx"),
        new Book("Women, Race & Class", "Angela Y.Davis")]
    )
}

export const Library = (): JSX.Element => {
    const [books, setBooks] = useState(Array<Book>())

    useEffect( () => {
        phonyApi.getBooks().then(books => setBooks(books))
    }, [])

    return <section>
        <ul>
            { books.map( (book,i) => <li key={i}>{book.asString()}</li>)}
        </ul>
    </section>
};
