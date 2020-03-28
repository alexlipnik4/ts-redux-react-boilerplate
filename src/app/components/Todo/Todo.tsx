import React from 'react'

type Props = {
  onClick: () => void,
  completed: boolean,
  text: string
}

const Todo = (props: Props) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
  </li>
)


export default Todo