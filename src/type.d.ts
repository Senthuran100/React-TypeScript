interface Todo {
    id:number
    title:string
    body:string
}

type todoState = {
    todos:Todo[]
}

type todoAction = {
    type:string
    todo:Todo
}

type DispatchType = (args:todoAction) => todoAction