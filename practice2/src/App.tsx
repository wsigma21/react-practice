import axios from "axios";
import './App.css';

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>{
      console.log(res.data);
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;
