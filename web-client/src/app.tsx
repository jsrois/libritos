import * as ReactDOM from "react-dom";
import * as React from "react";
import {App} from "./components/libritos";
import {BookRepository} from "./repos/BookRepository";

ReactDOM.render(<App bookRepository={new BookRepository()}/>, document.getElementById("app"));