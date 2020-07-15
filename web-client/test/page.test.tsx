import {cleanup, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {App} from "../src/components/render";
import '@testing-library/jest-dom/extend-expect';
import * as React from "react";


describe("Libritos page", () => {
    afterEach(cleanup);
    it("should allow to add books", () => {
        render(<App/>);

        userEvent.type(screen.getByLabelText(/Book Title/), "Women, Race & Class by Angela Y. Davis");
        userEvent.click(screen.getByText(/Add new book/));

        expect(screen.getByText(/Women, Race & Class by Angela Y. Davis/)).toBeInTheDocument();
    });

    it("should allow to remove books", () => {
        render(<App/>);

        addBook("Some book I don't want");

        userEvent.click(screen.getByText(/Remove/));

        expect(screen.queryByText(/Some book I don't want/)).not.toBeInTheDocument();
    });

    const addBook = (bookTitle: string) => {
        userEvent.type(screen.getByLabelText(/Book Title/), bookTitle);
        userEvent.click(screen.getByText(/Add new book/));
    }
});