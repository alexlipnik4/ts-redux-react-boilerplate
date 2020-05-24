import React, {useState, useContext, useRef, useEffect} from 'react';
import AuthService from '../../common/services/AuthService';
import Message from '../Message';

const Register = (props: any) => {
    const [user, setUser] = useState({username: "", password: "", role: ""});
    const [message, setMessage] = useState(null);
    let timeID: any = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timeID);
        }
    }, [])

    const onChange = (e: any) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onSubmit = (e: any) => {
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
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>

                <label htmlFor="username" className="sr-only">Username: </label>
                <input 
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username"
                />

                <label htmlFor="password" className="sr-only">Password: </label>
                <input 
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password"
                />


                <label htmlFor="role" className="sr-only">Role: </label>
                <input 
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Role"
                />

                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Register
                </button>
            </form>
            {message && <Message message={message} />}
        </div>
    )
    
}

export default Register;