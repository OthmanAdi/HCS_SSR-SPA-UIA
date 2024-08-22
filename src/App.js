import './App.css';
import React, {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if(input) {
      setTodos([...todos, input]); //the triple dots are knows as a "Spread Operator"
      setInput(''); //resetting the input field
    }
  }

  return (
    <>
    <h1>SPA Todo List</h1>

    <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder='Enter a Todo'
    ></input>

    <button onClick={addTodo}>Add Todo</button>

    <ul>
      {todos.map((newTodoItem, Index)=> (
        <li key={Index}>{newTodoItem}</li> //Key is given to assist with react todos sorting
      ))}
    </ul>
    </>
  );
}

export default App;
