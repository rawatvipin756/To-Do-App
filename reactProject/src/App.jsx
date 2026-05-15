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
        <input placeholder="Add Your Task"/>
        </div>
      <div>
        <button className="button">Add Task</button>
      </div>
    </div>
    <div>
      <p>the list</p>
    </div>
    </>
  )
}