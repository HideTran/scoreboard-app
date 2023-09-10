import { useState } from "react"
import "./main.scss"
function App() {
  const [doList, setDoList] = useState([
    {
      id: Date.now() * Math.random(),
      name: "Nguyễn A",
      // quantity: 0
    }
  ])

  function addList(e) {
    e.preventDefault();
    let newDo = {
      id: Date.now() * Math.random(),
      name: e.target.name.value,
      // quantity: 0
    }
    setDoList([...doList, newDo])
  }

  function check(doId) {
    setDoList(doList.map(doItem => {
      if (doItem.id == doId) {
        doItem.name = !doItem.name
      }
      return doItem
    }))
  }

  function deleteDo(doId) {
    setDoList(doList.filter(doItem => doItem.id != doId))
  }

  const [count, setCount] = useState(0)
  const Counter = ({ count, setCount }) => {
    const increase = () => {
      setCount(count + 1);
    };
    return
    const decrease = () => {
      setCount(count - 1);
    };
    return
  };

  return (
    <>
      <h1>Bảng Điểm</h1>
      <ul>
        {
          doList.map((doItem) => (
            <li key={doItem.id}>
              <button onClick={() => {
                deleteDo(doItem.id)
              }}>x</button>
              <input onChange={() => {
                check(doItem.id)
              }} type="hidden" />
              <span>{doItem.name}</span>
              <span className="btn-count">
                <button onClick={() => {
                  Counter(decrease)
                }}>-</button>
                <button>{count}</button>
                <button onClick={() => {
                  Counter(increase)
                }}>+</button>
              </span>
            </li>
          ))
        }
      </ul>
      <form onSubmit={(e) => {
        addList(e)
      }}>
        <input name="name" type="text" placeholder="Enter a player's name" />
        <button>Add Player</button>
      </form>

    </>
  )
}

export default App
