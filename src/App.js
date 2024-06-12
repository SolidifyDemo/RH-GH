import './App.css';
import TodoList from './components/TodoList';

function App() {
  const header = process.env.REACT_APP_HEADER || 'Default Header';

  return (
    <div className="App">
      <header className="App-header">
        <h1>{header}</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
