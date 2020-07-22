import * as React from "react";
import {Redirect} from "react-router";

export const Login = (props: { required: boolean, onCompleteLogin: () => void }): JSX.Element => {
        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onCompleteLogin();
        };

        return <div>
            {props.required ?
                <form onSubmit={onSubmit}>
                    <label htmlFor="user-name">Name</label>
                    <input id="user-name" type="text"></input>
                    <label htmlFor="user-password">Password</label>
                    <input id="user-password" type="text"></input>
                    <input type="submit" value="Login"></input>
                </form> :
                <Redirect to="/"/>
            }
        </div>;

    }
;