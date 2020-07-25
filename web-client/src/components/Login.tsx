import * as React from "react";
import {Redirect} from "react-router";
import "../styles/form.scss"

export const Login = (props: { required: boolean, onCompleteLogin: () => void }): JSX.Element => {
        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onCompleteLogin();
        };

        return <div>
            {props.required ?
                <form className="Form" onSubmit={onSubmit}>
                    <label className="Form__label" htmlFor="user-name">Name</label>
                    <input className="Form__textBox" id="user-name" type="text"></input>
                    <label className="Form__label" htmlFor="user-password">Password</label>
                    <input className="Form__textBox" id="user-password" type="text"></input>
                    <input className="Form__submitButton" type="submit" value="Login"></input>
                </form> :
                <Redirect to="/"/>
            }
        </div>;

    }
;