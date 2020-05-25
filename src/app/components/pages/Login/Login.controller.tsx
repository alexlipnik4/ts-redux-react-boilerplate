import React, {useState, useContext} from 'react';
import AuthService from '../../../common/services/AuthService';
import {AuthContext} from '../../../common/context/AuthContext';
import Login from './Login';

const LoginController = (props: any) => {
    const [user, setUser] = useState({username: "", password: ""});
    const [message, setMessage] = useState(null);
    const authContext: any = useContext(AuthContext);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLTextAreaElement;

        setUser({...user, [target.name] : target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/todos');
            }
            else {
                setMessage(message);
            }
        })
    }

    return (
        <Login 
            onSubmit={onSubmit}
            onChange={onChange}
            message={message}
        />
    )
    
}

export default LoginController;