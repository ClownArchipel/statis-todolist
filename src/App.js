import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 600,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex flex-column mb-2 p-5 h-100">
            <div className="todo-app">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
