import React, { FormEvent } from 'react'

type AddTodoProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  inputValue: string,
  onChange: (value: string) => void,
}

const AddTodo = (props: AddTodoProps) => (
  <form
    onSubmit={props.onSubmit}
  >
    <input value={props.inputValue} onChange={(e) => props.onChange(e.target.value)} />
    <button type="submit">Add Todo</button>
  </form>
)


export default AddTodo;