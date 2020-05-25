import React from 'react';
import Form from '../../Form/Form';
import { IRegisterProps } from './Register.model';

const Register = (props: IRegisterProps) => (
    <Form
        message={props.message}
        title="Please Register"
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
            },
            {
                label: "Role: ",
                name: "role",
                inputType: "text",
                placeHolder: "Enter Role",
            }
        ]}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        buttonText={"Submit"}
    />
)
    


export default Register;