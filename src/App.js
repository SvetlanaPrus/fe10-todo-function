import './App.css';
import React, {useState} from "react";

function App() {

  const [taskInput, setTaskInput] = useState('');
  const [statusInput, setStatusInput] = useState('');
  const [list, setList] = useState([{
      id: 1,
      name: "Learn JS",
      done: "yes",
  },{
      id: 2,
      name: "Learn React",
      done: "no",
  }]);

  const handlerOkClick = () => {
      setList([...list, {
          id: Math.floor(Math.random()*10),
          name: taskInput,
          done: statusInput,
      }]);
      setTaskInput('');
      setStatusInput('');
  }

  return (
      <div className="container">
        <h2 className="h2"> TodoList & function </h2>
        <input placeholder="Name of task..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text"/>
        <input placeholder="Done? ...yes/no" value={statusInput} onChange={(e) => setStatusInput(e.target.value)} type="text"/>
        <button onClick={handlerOkClick}> Ok </button>
          <ul>
            {
                list.map(el => <li key={el.id} className={el.done === "yes"? "done" : "not-done"}>{el.name}</li>)
            }</ul>
      </div>
  );
}

export default App;
