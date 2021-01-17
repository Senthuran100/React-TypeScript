import * as actionTypes from "./actionTypes"

export function addTodo(todo:Todo) {
  const action: todoAction = {
      type : actionTypes.ADD_TODO,
      todo
  }
  return invokeHttpRequest(action)
}

export function removeTodo(todo:Todo){
    const action: todoAction = {
        type : actionTypes.REMOVE_TODO,
        todo
    } 
  return invokeHttpRequest(action)

}

export function invokeHttpRequest(action: todoAction) {
    return (dispatch: DispatchType) => {
     
        dispatch(action)
       
    }
  }