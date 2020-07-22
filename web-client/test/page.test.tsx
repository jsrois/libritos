import {cleanup, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {App} from "../src/components/libritos";
import '@testing-library/jest-dom/extend-expect';
import * as React from "react";


describe("Libritos page", () => {
    afterEach(cleanup);
    it("requires user to log in to be able to add books", () => {
        render(<App/>); // TODO mock

        expect(screen.queryByText(/Add book/)).not.toBeInTheDocument();

        userEvent.click(screen.getByText(/Login/));

        userEvent.type(screen.getByLabelText(/Name/), "Admin");
        userEvent.type(screen.getByLabelText(/Password/), "Password");
        userEvent.click(screen.getByDisplayValue(/Login/));

        expect(screen.queryByText(/Add book/)).toBeInTheDocument();
    });
});