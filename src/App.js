import "./App.css"
import Clicker from "./Clicker"

function App() {
  return (
    <>
      <header>
        <h1>My first React App</h1>
      </header>
      <span id="buttons">
        <Clicker number={1} />
        <Clicker number={2} />
        <Clicker number={3} />
        <Clicker number={4} />
        <Clicker number={5} />
        <Clicker number={6} />
      </span>
    </>
  )
}

export default App
