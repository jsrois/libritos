import {Book} from "./Book";
import axios, {AxiosError} from "axios";

export const BookRepository = {
    getBooks: (): Promise<Array<Book>> => axios.get<Array<Book>>("/books")
        .then(response =>
            response.data
        ).catch((error: AxiosError) => {
            throw error;
        }),

    addBook: (book: Book) => {
        return axios.post<Book>("/books", book)
    }
}