import * as React from 'react';
import {Link} from "react-router-dom";

export const NavigationMenu = (props: { loggedIn: boolean }): JSX.Element => <nav className="topNavigationMenu">
    <Link to="/" id="page-title" className="topNavigationMenu__link topNavigationMenu__link--active">Libritos</Link>
    {props.loggedIn || <Link to="/login" className="topNavigationMenu__link">Login</Link>}
    {props.loggedIn && <Link to="/new" className="topNavigationMenu__link">Add book</Link>}
</nav>