import { Link } from 'lucide-react';
import { useState } from 'react'

import '../assets/styles/components/header.scss'
import Settings from '../routes/Settings';

export default () => {
    const [user, setUser] = useState('Marty')
    const [todoCount, setTodoCount] = useState(14)

    const printAmountTodos = () => {
        if (todoCount === 0) {
            return 'Good job, no todos!'
        } else if (todoCount === 1) {
            return 'You have 1 todo. Better start doing it!'
        } else if (todoCount > 100) {
            return `You have ${todoCount} todos, that's a lot of todos!`
        }

        return `You have ${todoCount} todos. Keep up the good work!`
    }
        

  return (
    <header className="flex items-center justify-between py-12">
      <div>
        <h1 className='text-4xl font-bold tracking-wide'>Hello, {user}</h1>
      <p className='text-lg text-neutral-500'>{printAmountTodos()}</p>
      </div>
      <Link className="p-4 rounded-full bg-neutral-100" to={'/settings'}>
      <Settings/>
      </Link>
      
    </header>
  );
};

