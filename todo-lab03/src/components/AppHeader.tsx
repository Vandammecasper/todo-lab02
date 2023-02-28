import { useState } from "react"

export const AppHeader = () => {
    const [user, setUser] = useState('Casper')
    const [todoCount, setTodoCount] = useState(14)

    const printAmountTodos = () => {
        if (todoCount === 0) {
            return 'no todos'
        } else if (todoCount === 1) {
            return 'you have 1 todo. Better start doing it!'
        }
        return `you have ${todoCount} todos. Get a move on!`
    }
  return (
    <header>
      <h1>Hello {user},</h1>
      <h3>{printAmountTodos()}</h3>
    </header>
  )
}

