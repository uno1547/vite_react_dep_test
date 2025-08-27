import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Vite + React 배포테스트
    </h1>
    <h3>이건 새롭게 추가된 기능임! develop 브랜치에 추가</h3>
    <h2>Counter: {count}</h2>
    <button onClick={() => setCount(count + 1)}>증가버튼</button>
    <button onClick={() => setCount(count - 1)}>감소버튼</button>
    </>
  )
}

export default App
