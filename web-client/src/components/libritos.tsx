import * as React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Library} from "./Library";
import {Login} from "./Login";
import {useState} from "react";

export const App = (): JSX.Element => {
    const [loggedIn, setLoggedIn] = useState(false);

    return <div>
        <Router>
            <nav className="topNavigationMenu">
                <Link to="/" className="topNavigationMenu__link topNavigationMenu__link--active">Libritos</Link>
                {loggedIn || <Link to="/login" className="topNavigationMenu__link">Login</Link>}
                {loggedIn && <Link to="/" className="topNavigationMenu__link">Add book</Link>}
            </nav>
            <Switch>
                <Route exact path="/" component={Library}/>
                <Route path="/login">
                    <Login required={!loggedIn} onCompleteLogin={ () => setLoggedIn(true) }></Login>
                </Route>
            </Switch>
        </Router>
    </div>;
};


