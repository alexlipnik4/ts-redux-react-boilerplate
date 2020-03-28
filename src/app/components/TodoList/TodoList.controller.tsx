import { connect } from 'react-redux'
import { toggleTodo } from '../../common/redux/actions'
import TodoList from './TodoList'
import { VisibilityFilters } from '../../common/redux/actions'
import {ITodo} from '../../common/redux/reducers/todos';

const getVisibleTodos = (todos: ITodo[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)