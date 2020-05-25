import React, {useState, useContext, useRef} from 'react';
import AuthService from '../../../common/services/AuthService';
import {AuthContext} from '../../../common/context/AuthContext';
import Register from './Register';

const RegisterController = (props: any) => {
    const [user, setUser] = useState({username: "", password: "", role: ""});
    const [message, setMessage] = useState(null);
    let timeID: any = useRef(null);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLTextAreaElement;

        setUser({...user, [target.name] : target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const {message} = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timeID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000);
            }
        })
    }

    const resetForm = () => {
        setUser({username: "", password: "", role: ""})
    }

    return (
        <Register 
            onSubmit={onSubmit}
            onChange={onChange}
            message={message}
            resetForm={resetForm}
        />
    )
    
}

export default RegisterController;