import {cleanup, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {App} from "../src/components/libritos";
import '@testing-library/jest-dom/extend-expect';
import * as React from "react";
import {BookRepository} from "../src/repos/BookRepository";


describe("Libritos page", () => {
    afterEach(cleanup);
    it("should allow to add books", () => {
        render(<App bookApi={new BookRepository()}/>); // TODO mock

        userEvent.type(screen.getByLabelText(/Book Title/), "Women, Race & Class by Angela Y. Davis");
        userEvent.click(screen.getByText(/Add new book/));

        expect(screen.getByText(/Women, Race & Class by Angela Y. Davis/)).toBeInTheDocument();
    });

    it("should allow to remove books", () => {
        render(<App bookApi={new BookRepository()}/>);

        addBook("Some book I don't want");

        userEvent.click(screen.getByText(/Remove/));

        expect(screen.queryByText(/Some book I don't want/)).not.toBeInTheDocument();
    });

    const addBook = (bookTitle: string) => {
        userEvent.type(screen.getByLabelText(/Book Title/), bookTitle);
        userEvent.click(screen.getByText(/Add new book/));
    }
});