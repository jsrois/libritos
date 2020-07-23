import * as React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Library} from "./Library";
import {Login} from "./Login";
import {useState} from "react";
import {NavigationMenu} from "./NavigationMenu";

export const App = (): JSX.Element => {
    const [loggedIn, setLoggedIn] = useState(false);

    return <div>
        <Router>
            <NavigationMenu loggedIn={loggedIn} />
            <Switch>
                <Route exact path="/" component={Library}/>
                <Route path="/login">
                    <Login required={!loggedIn} onCompleteLogin={ () => setLoggedIn(true) }></Login>
                </Route>
            </Switch>
        </Router>
    </div>;
};


