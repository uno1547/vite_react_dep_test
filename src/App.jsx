import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('응답대기')
  const apiRequest = async () => {
    const response = await fetch('https://express-dep-test.onrender.com/api/hello')
    const data = await response.json()
    setMessage(data.message)
  }
  return (
    <>
    <h1>
      Vite + React 배포테스트
    </h1>
    <h2>Counter: {count}</h2>
    <button onClick={() => setCount(count + 1)}>증가버튼</button>
    <button onClick={() => setCount(count - 1)}>감소버튼</button>
    <button onClick={apiRequest}>서버로인사하기</button>
    <h2>{message}</h2>
    </>
  )
}

export default App
