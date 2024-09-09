import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim() }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="todo-container">
      <h1>SPA Todo List</h1>
      <button className="info-button" onClick={toggleExplanation}>
        {showExplanation ? 'Hide SPA Info' : 'What is SPA?'}
      </button>
      {showExplanation && (
        <div className="explanation">
          <h2>Single Page Application (SPA)</h2>
          <p>
            This Todo List is an example of a Single Page Application (SPA). SPAs are web applications
            that load a single HTML page and dynamically update that page as the user interacts with the app.
            Instead of loading entire new pages from the server, SPAs use JavaScript to update the content
            without refreshing the page. This results in faster, more responsive user experiences.
          </p>
          <p>
            Key benefits of SPAs:
          </p>
          <ul>
            <li>Faster user interactions and smoother experience</li>
            <li>Reduced server load as only data is transferred, not entire pages</li>
            <li>Easier debugging with a consistent application state</li>
            <li>Simplified development process with a clear separation of client and server-side code</li>
          </ul>
        </div>
      )}
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Enter a Todo'
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;