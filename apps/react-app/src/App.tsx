import { sum } from '@DAO/common/utils'
import { Button } from '@DAO/react/components'

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[#fff] text-xl">
        <h2>Create React App</h2>
        <Button title="This is Button" color="blue"></Button>
        <p>sum(1, 2) is {sum(1)(2)()}</p>
        <a
          className="text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
