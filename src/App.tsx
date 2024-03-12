import { createSignal } from 'solid-js'
import './App.css'
import SvgBook from './comp/svg-book/svg-book'


export default  function App() {
  const [count, setCount] = createSignal(0)

  function sum(sum: number, percent: number) {
    const res = (sum / 100) * percent;

    return `(${percent}) от ${sum} = ${res}`
  }


  return (
    <>

      <div style={{ display: 'flex', gap: '2em' }}>
        <SvgBook />
      </div>


      <div>{sum(650, 40)}</div>
      <div>{sum(450, 60)}</div>


      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>


    </>
  )
}


