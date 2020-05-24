import React from 'react'
import Todo from '../Todo/Todo'
import {ITodo} from '../../../common/redux/reducers/todos';

type Props = {
  todos: ITodo[],
  toggleTodo: (id: number) => void
}

const TodoList = (props: Props) => (
  <ul>
    {props.todos && props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
    ))}
  </ul>
)


export default TodoList