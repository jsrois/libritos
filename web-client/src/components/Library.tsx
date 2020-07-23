import * as React from "react";
import {useContext, useEffect, useState} from "react";

class Book {
    private readonly _title: string;
    private readonly _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    asString =  (): string => `${this._title} by ${this._author}`;
}

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
