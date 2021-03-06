import React, {useState, useContext, useEffect} from 'react';
import Message from './Message';
import TodoItem from './TodoItem';
import TodoService from '../common/services/TodoService';
import { AuthContext } from '../common/context/AuthContext';

const Todo = () => {
    const [todo, setTodo] = useState({name: ""});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext: any = useContext(AuthContext);

    useEffect(() => {
        TodoService.getTodos().then(data => {
            setTodos(data.todos);
        })
    },[])

    const onSubmit = (e: any) => {
        e.preventDefault();
        TodoService.postTodo(todo).then(data => {
            const {message} = data;
            resetForm();
            
            if(!message.msgError) {
                TodoService.getTodos().then(getData => {
                    setTodos(getData.todos);
                    setMessage(message);
                })
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username: "", role: ""});
                authContext.setIsAuthenticated(false);
            }
            else {
                setMessage(message);
            }
        })
    } 

    const onChange = (e: any) => {
        setTodo({name: e.target.value});
    }

    const resetForm = () => {
        setTodo({name: ""})
    }

    return  (
        <div>
            <ul className="list-group">
                {
                    todos.map((todo: any) => (
                        <TodoItem key={todo._id} todo={todo} />
                    ))
                }
            </ul>
            <br />

            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input
                    type="text"
                    value={todo.name}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Please Enter Todo" 
                />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Submit
                </button>

                {message && <Message message={message} />}

            </form>
        </div>
    )
}

export default Todo;