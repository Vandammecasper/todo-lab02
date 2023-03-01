import { useState } from "react"
import { ITodo } from "./interfaces/ITodo"

import { AppHeader } from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import AppFooter from "./components/AppFooter"

function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: 1, name: 'Learn React', category: 'work'},
    {id: 2, name: 'Learn Vue', category: 'work'},
    {id: 3, name: 'Learn Angular', category: 'work'},
  ])

  const addNewTodo = (t: ITodo) => {
    setTodos([...todos, t])
  }
  return ( 
    <div className="o-container">
  <AppHeader />

  <AddTodo handleNewTodo = {addNewTodo}/>

  <ul>
    {todos.map((todo:ITodo) => (<TodoItem todo={todo} key={todo.name}/>))}
  </ul>  

  <AppFooter/>
  </div>
  )
}

export default App
