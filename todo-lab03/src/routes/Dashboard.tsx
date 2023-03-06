import { Link } from "lucide-react"
import AddTodo from "../components/AddTodo"
import TodoItem from "../components/TodoItem"

export default () => {
    return (
        <main>
            <Link to="/settings">Settings</Link>

            <AddTodo handleNewTodo = {AddTodo}/>

            <ul>
                <TodoItem name="water drinken" category="work" />
            </ul>  
        </main>
  )
}