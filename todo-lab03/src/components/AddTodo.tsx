import { Plus } from "lucide-react";
import { useState } from "react";

import '../assets/styles/components/todo.scss'
import { ITodo } from "../interfaces/ITodo";

export default ({ handleNewTodo}:{handleNewTodo: Function}) => {
  const [newTodo, setNewTodo] = useState<ITodo>({
    name: '',
    category: 'Work',
    isDone: false
  });

  const emptyTodo = () =>{
    setNewTodo({
      name: '',
      category: 'Work',
      isDone: false,
    })
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // vermijd dat de pagina herlaadt
    if(!newTodo.name || !newTodo.category) return; // TODO: error message

    handleNewTodo(newTodo); // we voeren code uit in App.tsx
    emptyTodo();
    
    console.log(newTodo)
  };

  return (
    <form onSubmit={addTodo} className="mb-8 flex items-center gap-4 w-full">
      <button className="shrink-0 w-16 h-16 hover:bg-neutral-100 flex items-center justify-center rounded-full focus: outline-none focus-visible:bg-neutral-200 focus-visible:ring-2">
        <Plus className="stroke-current text-neutral-700" />
      </button>

      <div className="space-y-2 w-full">
        <input
          value={newTodo.name}
          onInput={(e: React.FormEvent<HTMLInputElement>) => setNewTodo({ ...newTodo, name: e.currentTarget.value })}
          className="appearance-none text-3xl bg-transparent p-2 rounded w-full focus:outline-none focus-visible:ring-2"
          type="text"
          placeholder="Add a new todo" />
        <select
          value={newTodo.category}
          onChange={(e: React.FormEvent<HTMLSelectElement>) => setNewTodo({ ...newTodo, category: e.currentTarget.value })}
          className="w-full p-2 appearance-none bg-transparent rounded focus:outline-none focus-visible:ring-2"
          name="category" id="category">
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
};
