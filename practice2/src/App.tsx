import { useState } from "react";
import axios from "axios";
import './App.css';
import { Todo } from "./Todo"
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

const user = {
  name: "sigma",
  hobbies : ["囲碁", "将棋"]
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) =>{
      setTodos(res.data);
    })
  }
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}></Todo>
      ))}
    </div>
  );
}

export default App;
