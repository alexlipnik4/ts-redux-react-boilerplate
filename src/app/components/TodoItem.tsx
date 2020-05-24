import React from 'react';

const TodoItem = (props: any) => {
    return (
        <li>{props.todo.name}</li>
    )
}

export default TodoItem;