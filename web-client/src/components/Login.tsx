import * as React from "react";
import {Redirect} from "react-router";
import {useInput} from "../hooks/useInput";

export const Login = (props: { required: boolean, onCompleteLogin: (user: string, password: string) => void }): JSX.Element => {
        const {value: user, bind: bindUser} = useInput("")
        const {value: password, bind: bindPassword} = useInput("")


        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onCompleteLogin(user, password);
        };

        return <div>
            {props.required ?
                <form className="Form" onSubmit={onSubmit}>
                    <label className="Form__label" htmlFor="user-name">Name</label>
                    <input className="Form__textBox" id="user-name" type="text" {...bindUser}/>
                    <label className="Form__label" htmlFor="user-password">Password</label>
                    <input className="Form__textBox" id="user-password" type="text" {...bindPassword}/>
                    <input className="Form__submitButton" type="submit" value="Login"/>
                </form> :
                <Redirect to="/"/>
            }
        </div>;

    }
;