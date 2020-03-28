import React from 'react'
import Footer from './components/Footer/Footer';
import TodoList from './components/TodoList/TodoList.controller';
import AddTodo from './components/AddTodo/AddTodo.controller'

const App = (props: any) => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App