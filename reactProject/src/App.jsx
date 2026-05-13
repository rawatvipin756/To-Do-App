import "./App.css";

export default function App() {
  return (
    <>
    <header>
      <div className="header">
        Todo App
      </div>
    </header>
    <div className="main">
      <div className="inputField">
        <input value="task" placeholder="Add Your Task"/>
        </div>
      <div>
        <button className="button">
          Add Task
        </button>
      </div>
    </div>
    <div>
      <p>first item</p>
    </div>
    <footer>
      <p>Total Count =</p>
    </footer>
    </>
  )
}