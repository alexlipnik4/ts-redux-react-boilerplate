import React, { FormEvent } from 'react';
import AddTodo from './AddTodo';
import { connect } from 'react-redux'
import { addTodo } from '../../../common/redux/actions'

const AddTodoController = (props: any) => {
    const [inputValue, changeInputValue] = React.useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputValue.trim()) {
            return
        }
        props.dispatch(addTodo(inputValue))
        changeInputValue('');
    }
    
    const onChange = (value: string) => {
        changeInputValue(value)
    }

    return (
        <AddTodo 
            onSubmit={onSubmit}
            inputValue={inputValue}
            onChange={onChange}
        />
    )
}

export default connect()(AddTodoController)