import * as actionTypes from "./actionTypes"

const initialState:todoState={
    todos:[
        {
          id: 1,
          title: "Todo 1",
          body:
            "Todo List 1",
        },
        {
          id: 2,
          title: "Todo 2",
          body:
            "Todo List 2",
        },
      ],
}

const reducer = (state:todoState = initialState,action:todoAction):todoState =>{
    switch (action.type) {
        case actionTypes.ADD_TODO:
          const newTodo: Todo = {
            id: Math.random(), 
            title: action.todo.title,
            body: action.todo.body,
          }
          return {
            ...state,
            todos: state.todos.concat(newTodo),
          }
        case actionTypes.REMOVE_TODO:
          const updatedTodos: Todo[] = state.todos.filter(
            todo => todo.id !== action.todo.id
          )
          return {
            ...state,
            todos: updatedTodos,
          }
      }
      return state
    }
    
export default reducer
