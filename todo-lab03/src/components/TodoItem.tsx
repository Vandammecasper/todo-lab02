import '../assets/styles/components/todo-item.scss'
import {ITodo} from '../interfaces/ITodo'

export default ({todo}: {todo: ITodo}) => {
    // description, category, isDone, id
    return (
        <li className='c-todo-item'>
            <input type="checkbox" checked={todo.isDone} />
            <label htmlFor="">{todo.name}</label>
            <p>{todo.category}</p>
        </li>
    )
    }