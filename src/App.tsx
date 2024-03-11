import { createSignal } from 'solid-js'
import './App.css'
import SvgBook from './comp/svg-book'


export default  function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>

      <div style={{ display: 'flex', gap: '2em' }}>

        <SvgBook />
      </div>

      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>


    </>
  )
}


