import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  // Response.data has properties of: id , title , completed
  const todo = response.data as Todo
  const id = todo.id // todo.ID
  const title = todo.title // todo.Title
  const completed = todo.completed // const finished = todo.finished

  logTodo(id, title, completed) // logTodo(id,completed, title)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id} 
  and title: ${title}  
  and finished: ${completed}
`)
}
