import axios, {AxiosResponse} from "axios";
import {BookList} from "../domain/book";

export class BookRepository {
    public getAllBooks(): Promise<BookList> {
        return axios.get("/books").then((response: AxiosResponse<BookList>) => response.data)
    }
}