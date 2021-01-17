import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import './App.css';
import { Dispatch } from "redux"
import { addTodo, removeTodo } from "./store/actionCreators"
import { AddTodo } from "./components/AddTodo"
import { Todo } from "./components/Todo";


const App: React.FC = () =>{
  const todos:readonly Todo[] = useSelector(
    (state:todoState) => state.todos,shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveTodo = React.useCallback(
    (todo: Todo) => dispatch(addTodo(todo)),
    [dispatch]
  )

  return (
    <main>
      <h1 className="header">My Todos</h1>
      <AddTodo saveTodo={saveTodo} />
      {todos.map((todo: Todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
      </main>
  )
}

export default App;
