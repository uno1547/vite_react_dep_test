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
    <h2>Counter: {count}</h2>
    <button onClick={() => setCount(count + 1)}>버튼누르기</button>
    </>
  )
}

export default App
