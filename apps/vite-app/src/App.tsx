import { useState } from 'react'
import './App.css'
import { isClient } from '@neopark/common/utils'
import { Button } from '@neopark/react/components'
import { useDidUpdateEffect } from '@neopark/react/hooks'

function App() {
  const [count, setCount] = useState(0)

  useDidUpdateEffect(() => {
    console.log('123')
  }, [])

  return (
    <div className="App">
      组件：<Button></Button>
      <h1>Vite + React {isClient == true ? 'Yes' : 'No'}</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
