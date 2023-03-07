import { Plus } from "lucide-react"
import React, { ChangeEvent, useState } from "react"
import { ITodo } from "../interfaces/ITodo"

export default ({handleNewTodo}:{handleNewTodo : Function}) => {
    const [newTodo, setNewTodo] = useState<ITodo>({
        name: '',
        category: 'work',
        isDone: false,
    })

    const emptyTodo = () =>{
        setNewTodo({
            name: '',
            category: 'Work',
            isDone: false,
        })
    }

    const addTodo = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // if (!newTodo.name || !newTodo.category) return// todo: show warning message
        // (
        // )
        handleNewTodo(newTodo)
        console.log('add todo', newTodo)
        emptyTodo()
    }

    return (
        <form onSubmit={addTodo} className="c-add-todo">
            <button className="c-add-todo__button">
                <Plus className="c-add-todo__icon"/>
            </button>
            <div>
                <input value={newTodo.name} onInput={e => setNewTodo({...newTodo, name: e.target.value})} className="c-add-todo__input" type="text" placeholder="eg. learn vue"/>
                <select value={newTodo.category} onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setNewTodo({...newTodo, category: e.currentTarget.value})}} className="c-add-todo__select" name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
            
        </form>
    )
    }