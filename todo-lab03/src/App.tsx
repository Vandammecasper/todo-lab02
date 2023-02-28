import { AppHeader } from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import AppFooter from "./components/AppFooter"

function App() {
  return ( 
    <>
  <AppHeader />

  <AddTodo/>

  <TodoItem/>

  <AppFooter/>
  </>
  )
}

export default App
