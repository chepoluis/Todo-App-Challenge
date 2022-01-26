import { TodoItem } from "./components/TodoItem";

import './App.css';

function App() {
  return (
    <div>
      {/* Insertar header */}
      <h1>Home</h1>
      <hr />

      <TodoItem />
    </div>
  );
}

export default App;
