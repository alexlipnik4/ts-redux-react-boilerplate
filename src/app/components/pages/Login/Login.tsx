import React from 'react';
import Form from '../../Form/Form';
import { ILoginProps } from './Login.model';

const Login = (props: ILoginProps) => (
    <Form
        message={props.message}
        title="Please sign in"
        rows={[
            {
                label: "UserName: ",
                name: "username",
                inputType: "text",
                placeHolder: "Enter Username",
            },
            {
                label: "Password: ",
                name: "password",
                inputType: "password",
                placeHolder: "Enter Password",
            }
        ]}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        buttonText="Log in"
    />
)
    


export default Login;