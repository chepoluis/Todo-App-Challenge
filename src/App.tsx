import { TodoItem } from "./components/TodoItem";

import './App.css';
import { TodoGrid } from "./components/TodoGrid";

function App() {
  return (
    <div>
      {/* Insertar header */}
      <h1>Home</h1>
      <hr />

      <TodoGrid />
    </div>
  );
}

export default App;
