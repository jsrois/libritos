export class Book {
    private readonly _title: string;
    private readonly _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    asString = (): string => `${this._title} by ${this._author}`;
}