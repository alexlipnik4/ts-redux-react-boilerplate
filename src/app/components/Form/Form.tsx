import React from 'react';
import { Typography, TextField, Button } from 'rmwc';
import Message from '../Message';

import './Form.scss'

interface IFormRow {
    label: string,
    inputType: string,
    name: string,
    placeHolder: string,
}

interface IForm {
    title: string,
    rows: IFormRow[],
    onChange: (event: React.FormEvent<HTMLInputElement>) => void,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    message: string | null,
    buttonText: string
}

const Form = (props: IForm) => (
    <form className="form" onSubmit={props.onSubmit}>
        <div className="form__body">
            <Typography className="form__title" use="headline3">{props.title}</Typography>

            {
                props.rows.map((row, index) => (
                    <div key={index} className="form__row">
                        <TextField
                            type={row.inputType}
                            name={row.name}
                            onChange={props.onChange}
                            className="form__text-field"
                            placeholder={row.placeHolder}
                        />
                    </div>
                ))
            }

            
                <Button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    {props.buttonText}
                </Button>
                {props.message && <Message message={props.message} />}
        </div>
    </form>
)

export default Form;