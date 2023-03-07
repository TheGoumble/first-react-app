import { useState } from "react"
import "./clicker.css"

const Clicker = ({ number }) => {
  const [count, setCount] = useState(0)

  const color = (x) => {
    return x === 1
      ? "1"
      : x === 2
      ? "2"
      : x === 3
      ? "3"
      : x === 4
      ? "4"
      : x === 5
      ? "5"
      : "6"
  }

  return (
    <div className={`color_${color(number)}`}>
      <p>You've clicked the button {count} times.</p>
      <button
        onClick={() => {
          console.log(`I clicked the button` + count)
          // count++
          setCount(count + number)
        }}
      >
        Add {number}
      </button>
    </div>
  )
}

export default Clicker
